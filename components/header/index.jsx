import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-around items-center py-5">
        <h1>Bilguun</h1>
    <div className="flex ">
        <div className="flex justify-between gap-10 ">
            <Link href="/">HOME</Link>
            <Link href="/">SERVICES</Link>
            <Link href="/">RESUME</Link>
            <Link href="/">PROJECTS</Link>
            <Link href="/">BLOG</Link>
            <Link href="/">CONTACT</Link>
            <Link href="/">PAGES</Link>
        </div>
        <div className="flex gap-3 px-10">
        </div>
    </div>
    </header>
  );
};

export default Header;
