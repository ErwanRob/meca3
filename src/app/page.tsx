import Link from "next/link";

export default function Landing() {
  return (
    <div className="bg-gray-900 text-white flex flex-col gap-10 justify-center items-center min-h-screen">
      <h1 className="text-6xl text-amber-500">
        Bienvenue sur le site Meca3 😍
      </h1>

      <Link
        href="/home"
        className="bg-gray-700 p-5 rounded-2xl text-3xl hover:scale-105 transition-transform duration-200"
      >
        {" "}
        Parcourir le site 👉
      </Link>
    </div>
  );
}
