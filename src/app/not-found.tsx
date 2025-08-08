import { MainHeader } from "@/components/Header";
import { mainHeader } from "@/data/header/mainHeader";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-50 text-center">
      <MainHeader
        items={mainHeader.map((item) => ({
          title: item.title,
          href: item.href,
        }))}
        className=""
      />
      <div className="flex flex-col items-center justify-center gap-10 text-gray-900">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-semibold">
            Hey, vous avez l&apos;air perdu 🤓
          </h1>
          <p className="text-xl text-gray-500">
            La page que vous recherchez n&apos;existe pas, ou pas encore ...
          </p>
        </div>
        <Link
          className="rounded-2xl bg-orange-200/80 px-8 py-4 text-xl font-semibold transition-all duration-200 hover:bg-orange-300/80"
          href="/portail"
        >
          Retour à la réalité{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
