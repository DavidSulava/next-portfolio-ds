'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from '@/components/navLink';
import { motion, Variants } from 'framer-motion';
import { navLinks, socialLinks } from '@/data/navigation';
import { publicPath } from '@/lib/publicPath';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const topVariants: Variants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: 'rgb(255,255,255)' },
  };
  const centerVariants: Variants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants: Variants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: 'rgb(255,255,255)' },
  };
  const listVariants: Variants = {
    closed: { x: '100vw' },
    opened: {
      x: 0,
      transition: { when: 'beforeChildren', staggerChildren: 0.2 },
    },
  };
  const listItemVariants: Variants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {navLinks.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">David</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            Sulava
          </span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        {socialLinks.map((item) => (
          <Link href={item.url} target="_blank" key={item.url}>
            <Image src={publicPath + item.img} alt="link image" width={24} height={24} />
          </Link>
        ))}
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          />
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded"
          />
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          />
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {navLinks.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
