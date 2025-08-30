import { z } from "zod";

// * Define annotation's types (link, interactions, etc.)
const MarkDefSchema = z.union([
  z.object({
    _key: z.string(),
    _type: z.literal("link"),
    href: z.string(),
  }),
  z.object({
    _key: z.string(),
    _type: z.literal("interaction"),
    action: z.string(),
    targetId: z.string(),
    payload: z.any(), //  "payload" peut être n'importe quoi (URL d'image, texte, etc.)
  }),
]);

// * Define a span of text, which can have annotations
const SpanSchema = z.object({
  _type: z.literal("span"),
  text: z.string(),
  marks: z.array(z.string()).optional(),
});

// * Define the ContentBlock type first to break the circular reference
type ContentBlock =
  | {
      id?: string;
      type: "paragraph";
      data: {
        content: z.infer<typeof SpanSchema>[];
        markDefs?: z.infer<typeof MarkDefSchema>[];
      };
    }
  | { id?: string; type: "subheading"; data: { text: string } }
  | {
      id?: string;
      type: "image";
      data: { src: string; alt: string; caption?: string };
    }
  | {
      id?: string;
      type: "list";
      data: { style: "ordered" | "unordered"; items: string[] };
    }
  | {
      id?: string;
      type: "details";
      data: { summary: string; defaultOpen?: boolean; content: ContentBlock[] };
    }
  | {
      id?: string;
      type: "grid";
      data: { columns: { span?: number; content: ContentBlock[] }[] };
    }
  | {
      id?: string;
      type: "interactive_grid";
      data: { columns: { span?: number; content: ContentBlock[] }[] };
    }
  | {
      id?: string;
      type: "section_fold";
      data: { title: string; defaultOpen?: boolean; content: ContentBlock[] };
    };

// Define the schema for ContentBlock using z.lazy() to handle the recursion
const ContentBlockSchema: z.ZodType<ContentBlock> = z.lazy(() =>
  z.discriminatedUnion("type", [
    z.object({
      id: z.string().optional(),
      type: z.literal("paragraph"),
      data: z.object({
        content: z.array(SpanSchema),
        markDefs: z.array(MarkDefSchema).optional(),
      }),
    }),
    z.object({
      id: z.string().optional(),
      type: z.literal("subheading"),
      data: z.object({ text: z.string() }),
    }),
    z.object({
      id: z.string().optional(),
      type: z.literal("image"),
      data: z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      }),
    }),
    z.object({
      id: z.string().optional(),
      type: z.literal("list"),
      data: z.object({
        style: z.enum(["ordered", "unordered"]),
        items: z.array(z.string()),
      }),
    }),
    z.object({
      id: z.string().optional(),
      type: z.literal("details"),
      data: z.object({
        summary: z.string(),
        defaultOpen: z.boolean().optional(),
        content: z.array(ContentBlockSchema),
      }),
    }),
    z.object({
      id: z.string().optional(),
      type: z.literal("grid"),
      data: z.object({
        columns: z.array(
          z.object({
            span: z.number().optional().default(1),
            content: z.array(ContentBlockSchema),
          }),
        ),
      }),
    }),
    z.object({
      id: z.string().optional(),
      type: z.literal("interactive_grid"),
      data: z.object({
        columns: z.array(
          z.object({
            span: z.number().optional().default(1),
            content: z.array(ContentBlockSchema),
          }),
        ),
      }),
    }),
    z.object({
      id: z.string().optional(),
      type: z.literal("section_fold"),
      data: z.object({
        title: z.string(),
        defaultOpen: z.boolean().optional().default(false),
        content: z.array(ContentBlockSchema),
      }),
    }),
  ]),
);

// Define the LeconPageNode type
type LeconPageNode = {
  slug: string;
  title: string;
  content: ContentBlock[];
  children?: LeconPageNode[];
};

// Schema for a single LeconPageNode
const LeconPageNodeSchema: z.ZodType<LeconPageNode> = z.lazy(() =>
  z.object({
    slug: z.string(),
    title: z.string(),
    content: z.array(ContentBlockSchema),
    children: z.array(LeconPageNodeSchema).optional(),
  }),
);

// Schema for a single Lecon
export const LeconSchema = z.object({
  id: z.string(),
  icon: z.string(),
  title: z.string(),
  type: z.string(),
  category: z.string(),
  application: z.string(),
  levels: z.array(z.object({ level: z.string(), subLevel: z.string() })),
  pageTree: LeconPageNodeSchema,
  links: z.array(z.object({ title: z.string(), href: z.string() })),
  downloadRef: z.string(),
  status: z.string(),
});

// Schema for the entire JSON file (an array of Lecons)
export const LeconsSchema = z.array(LeconSchema);
export type Lecon = z.infer<typeof LeconSchema>;
// Export the types defined manually above
export type { LeconPageNode, ContentBlock };
