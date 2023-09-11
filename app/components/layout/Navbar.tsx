'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { UserButton, useAuth, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  const { sessionId: session } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  const [isMenuToggled, setMenuToggled] = React.useState<boolean>(false);

  const handleClick = () => {
    setMenuToggled(!isMenuToggled);
  };

  return (
    <>
      <nav className="w-full sm:flex hidden mt-5 items-center lg:text-lg">
        {/* // Desktop view */}
        <div className="flex md:justify-start justify-center items-center md:ml-10 mx-auto"></div>

        <div className="sm:flex hidden">
          {session ? (
            <div className="flex gap-3 md:gap-5 items-center px-5">
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <nav className="flex px-5 gap-5 my-5">
              <Link href={'/api/auth/sign-in'}>Sign In</Link>
            </nav>
          )}
        </div>
      </nav>
    </>
  );
};
