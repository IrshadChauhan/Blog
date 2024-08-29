import Link from "next/link";
import React from "react";
import NavLink from "./navLink/navLink";
import styles from "./links.module.css"

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div className={styles.container}>
      {links.map((link) => (
        <NavLink key={link.title} item={link}/>
      ))}
    </div>
  );
};

export default Links;
