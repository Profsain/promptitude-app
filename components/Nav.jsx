"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth";

const Nav = () => {
  const isUserLoggedIn = true; // TODO: replace with useSession() hook

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const getProvidersData = async () => {
      (async () => setProviders(await getProviders()))();
    };
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptitude"
          width={32}
          height={32}
        />
        <p className="logo_text">Promptitude</p>
      </Link>

      {/* Desktop menu */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                alt="Profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign in with {provider.name}
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              alt="Profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            />
            {mobileMenuOpen && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Create Post
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    signOut();
                    setMobileMenuOpen(false);
                  }}
                  className="drop_link"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign in with {provider.name}
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
