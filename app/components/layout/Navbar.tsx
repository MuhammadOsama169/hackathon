'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { UserButton, useAuth, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import logo from '../../../public/logo.png';
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
        <div className="flex md:justify-start justify-center items-center md:ml-10 mx-auto">
          <Link href={'/'}>
            <Image src={logo} alt="logo" className="w-auto h-[50px]" />
          </Link>
        </div>

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

      {/* Mobile view */}

      <nav className="w-full sm:hidden flex md:justify-start justify-between items-center md:ml-5 mt-10 mx-auto md:px-10 px-5">
        <div className="flex justify-start mx-auto">
          <Image src={logo} alt="logo" className="w-auto h-[50px]" />
        </div>

        {/* Hamburger icon */}
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={handleClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <motion.div animate={{ opacity: isMenuToggled ? 1 : 0 }}>
          {isMenuToggled && (
            <div className="fixed right-0 top-0 h-[350px] bg-[#454343] w-[200px]  z-40 rounded-l-lg border-black py-10">
              <div className="flex flex-row-reverse justify-items-end px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                  onClick={handleClick}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <div className="flex flex-col text-white justify-center mx-auto items-center text-xl gap-5 pt-10">
                <Link href={'/'}>Home</Link>
                <Link href="/submissions">Share✨</Link>

                {/* {session ? <SignOutButton /> : <SignInButton />} */}
              </div>
            </div>
          )}
        </motion.div>
      </nav>
    </>
  );
};
