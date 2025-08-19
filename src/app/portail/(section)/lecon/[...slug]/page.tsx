import { getLeconPageData } from "@/lib/data";
import { notFound } from "next/navigation";
import ContentRenderer from "@/components/ContentRenderer/ContentRenderer";

// bug fix slug not being the expected slug for each lesson's defaults page

const LeconSlugPage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  //Function here wont be called twice (here and in layout) thanks to useCache
  const data = await getLeconPageData(slug);

  if (!data) {
    return notFound();
  }

  const { currentPage } = data;

  return (
    // * Remove div to only return ContentRenderer for final build
    <div>
      <div className="mb-4 flex w-fit flex-col rounded-xl border-1 border-gray-300 p-2">
        <h1 className="text-xs text-blue-500">
          Titre :{" "}
          <span className="font-bold text-green-600">{currentPage.title}</span>
        </h1>

        <p className="text-xs text-blue-500">
          Slug :{" "}
          <span className="font-bold text-red-500">{currentPage.slug}</span>
        </p>
      </div>
      <ContentRenderer blocks={currentPage.content} />
    </div>
  );
};

export default LeconSlugPage;
