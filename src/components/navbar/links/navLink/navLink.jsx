"use client"
import Link from "next/link";
import React from "react";
// import styles form "./navLink.module.css";
import styles from "./navLink.module.css"
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {

  let path = usePathname()
  return (
    <div className={`${styles.container} ${path === item.path && styles.active} `}>
      <Link href={item.path} key={item.title} >
        {item.title}
      </Link>
    </div>
  );
};

export default NavLink;
