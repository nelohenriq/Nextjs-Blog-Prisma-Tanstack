import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral-100">
      <div className="container">
        <div className="flex-1">
          <Link href="/" className="">
            Icon
          </Link>
        </div>
        <div className="flex flex-nowrap">
          <Link href="/create" className="btn btn-ghost">
            Create post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
