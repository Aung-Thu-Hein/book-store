import Image from "next/image";
import background from "../../public/home/book-bg.png";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex relative flex-col justify-center items-center h-screen">
    <Image
      className="blur-sm"
      alt="Background"
      src={background}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
    <div className=" p-2 flex flex-col justify-center items-center z-10 bg-yellow-100 lg:w-2/5 h-1/4 rounded-md">
      <div className="flex pb-5 mb-5 text-5xl text-yellow-600">
        <SparklesIcon className="w-12 h-12" />
        <p>LitLoop</p>
      </div>
      <div>
        <Link
          href="/store"
          className="bg-yellow-600 text-white hover:bg-yellow-900 p-3 rounded-sm text-lg text mr-2"
        >
          TAKE ME TO THE STORE
        </Link>
      </div>
    </div>
  </div>
  );
}
