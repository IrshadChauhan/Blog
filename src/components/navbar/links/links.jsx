"use client"

import Link from "next/link";
import React from "react";
import NavLink from "./navLink/navLink";
import styles from "./links.module.css";
import { useState } from "react";

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
const Links = () => {
const [open, setOpen] = useState(true)
  const seesion = true;
  const isAdmin = false;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
        {seesion ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.button}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
        <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>Menu</button>
      <div className={styles.mobileLinks}>
        { open &&  links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
      </div>
    </div>
  );
};

export default Links;
