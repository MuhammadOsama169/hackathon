'use client';
import React from 'react';
import Link from 'next/link';
import { UserButton, useAuth, useUser } from '@clerk/nextjs';

export const Navbar = () => {
  const { sessionId: session } = useAuth();
  return (
    <nav className="absolute z-50 m-10">
      <div className="sm:flex hidden">
        {session ? (
          <div className="flex items-center ml-1 my-2">
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <nav className="flex gap-5 my-5">
            <Link href={'/api/auth/sign-in'}>Sign In</Link>
          </nav>
        )}
      </div>
      <Link href={'/'} className="hover:scale-[0.8]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </Link>
    </nav>
  );
};
