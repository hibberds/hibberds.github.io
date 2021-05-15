import Link from "next/link";

function NavItem({ title, url }) {
  return <Link href={url}>{title}</Link>;
}

export default NavItem;
