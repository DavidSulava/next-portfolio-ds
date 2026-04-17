'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinkProps } from '@/types';
import {FC} from 'react';

const NavLink: FC<NavLinkProps> = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
