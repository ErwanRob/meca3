import { z } from "zod";

// Define the ContentBlock type first to break the circular reference
type ContentBlock =
  | { type: "paragraph"; data: { text: string } }
  | { type: "subheading"; data: { text: string } }
  | { type: "image"; data: { src: string; alt: string; caption?: string } }
  | { type: "list"; data: { style: "ordered" | "unordered"; items: string[] } }
  | {
      type: "details";
      data: { summary: string; defaultOpen?: boolean; content: ContentBlock[] };
    }
  | {
      type: "grid";
      data: { columns: { span?: number; content: ContentBlock[] }[] };
    };

// Define the schema for ContentBlock using z.lazy() to handle the recursion
const ContentBlockSchema: z.ZodType<ContentBlock> = z.lazy(() =>
  z.discriminatedUnion("type", [
    z.object({
      type: z.literal("paragraph"),
      data: z.object({ text: z.string() }),
    }),
    z.object({
      type: z.literal("subheading"),
      data: z.object({ text: z.string() }),
    }),
    z.object({
      type: z.literal("image"),
      data: z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      }),
    }),
    z.object({
      type: z.literal("list"),
      data: z.object({
        style: z.enum(["ordered", "unordered"]),
        items: z.array(z.string()),
      }),
    }),
    z.object({
      type: z.literal("details"),
      data: z.object({
        summary: z.string(),
        defaultOpen: z.boolean().optional(),
        content: z.array(ContentBlockSchema),
      }),
    }),
    z.object({
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
