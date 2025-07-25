import Link from "next/link";

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-gray-900 text-white">
      <h1 className="text-6xl text-amber-500">
        Bienvenue sur le site Meca3 😍
      </h1>

      <Link
        href="/portail"
        className="rounded-2xl bg-gray-700 p-5 text-3xl transition-transform duration-150 hover:scale-105"
      >
        {" "}
        Parcourir le site 👉
      </Link>
    </div>
  );
}
