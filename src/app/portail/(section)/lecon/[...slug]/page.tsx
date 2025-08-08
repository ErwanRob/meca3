import { getLeconPageData } from "@/lib/data"; // Importer notre nouvelle fonction
import { notFound } from "next/navigation";

// Note : Correction du type pour les props
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

  const { currentPage } = data; // getting currentPage

  return (
    <div>
      <h1 className="text-blue-500">
        Titre de la page :{" "}
        <span className="font-bold text-green-600">{currentPage.title}</span>
      </h1>

      <p className="text-blue-500">
        Slug de la page{" "}
        <span className="font-bold text-red-500">{currentPage.slug} </span>
      </p>

      <p>Contenu de la page : {currentPage.content}</p>
    </div>
  );
};

export default LeconSlugPage;
