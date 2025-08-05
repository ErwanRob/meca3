import { leconList } from "@/data/contentData/leconList";
import { notFound } from "next/navigation";

const LeconSlugPage = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;
  const leconId = slug[0];

  const lecon = leconList.find((l) => l.id === leconId);

  if (!lecon) return notFound();

  return (
    <div>
      <h1>{lecon.title}</h1>
    </div>
  );
};

export default LeconSlugPage;
