import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-[#016FD0] text-white flex justify-end p-6">
      <Link className="ml-4" href="/">
        Home
      </Link>
      <Link className="ml-4" href="/users">
        Users
      </Link>
    </nav>
  );
}
