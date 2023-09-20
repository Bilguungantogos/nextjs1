import React from "react";
import Link from "next/link";
import { BsFacebook } from 'react-icons/Bs';
import { BsGithub } from 'react-icons/Bs';
import { BsInstagram } from 'react-icons/Bs';
import { BsTwitter } from 'react-icons/Bs';

const Header = () => {
  return (
    <header className="flex justify-around items-center py-5">
        <h1>Bilguun</h1>
    <div className="flex ">
        <div className="flex justify-between">
            <Link href="/">HOME</Link>
            <Link href="/">SERVICES</Link>
            <Link href="/">RESUME</Link>
            <Link href="/">PROJECTS</Link>
            <Link href="/">BLOG</Link>
            <Link href="/">CONTACT</Link>
            <Link href="/">PAGES</Link>
        </div>
        <div className="flex">
            <BsFacebook />
            <BsGithub />
            <BsInstagram />
            <BsTwitter />
        </div>
    </div>
    </header>
  );
};

export default Header;
