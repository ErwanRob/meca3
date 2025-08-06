import { leconList } from "@/data/contentData/leconList";
import { notFound } from "next/navigation";

/* export default function LeconSlugPage ({ params}: {params: { slug: string[] }; }) { */
// Ex: /portail/lecon/1/1.1/1.1.1

const LeconSlugPage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  const leconId = slug[0];

  console.log("LeconSlugPage params:", slug);
  // Trouver la leçon principale
  const lecon = leconList.find((l) => l.id === leconId);
  console.log("LeconSlugPage lecon:", lecon);

  if (!lecon) return notFound();

  // Si tu veux aller plus loin dans l’arborescence, tu peux parser slug.slice(1)
  // et parcourir la structure de la leçon (voir structure ci-dessous)

  return (
    <div>
      <h1>{lecon.title}</h1>
      {/*   <p> {lecon.content}</p> */}

      {/* Affiche ici le contenu principal ou la sous-section selon le slug */}
      {/* Tu peux aussi générer un SideMenu à partir de lecon.structure */}
    </div>
  );
};

export default LeconSlugPage;
