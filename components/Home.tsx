import Image from "next/image";
import Link from "next/link";

const imageStyles = {
    borderWidth: 2,
    borderColor: "white",
    width: "100%",
    height: "auto",
  };

export default function Home() {
    return (
      <main className="flex flex-col h-screen items-center justify-center bg-[#016FD0]">
        <p className="mt-5 mb-1 text-4xl font-bold">Welcome to the</p>

        <div className="mt-3 w-96 lg:w-[500px] ">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"
            width={400}
            height={400}
            alt="Amex Logo"
            sizes="100vw"
            style={imageStyles}
          />
        </div>

        <div className="flex flex-col justify-center items-center border-3 border-yellow-400">
          <p className="mt-5 text-4xl font-bold">Coding Challenge</p>
          <p className="mt-1 text-2xl font-light">
            <Link href="/users">View User List</Link>
          </p>
        </div>
      </main>
    )
  }