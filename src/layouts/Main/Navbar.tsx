'use client';
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ChevronsUpDown, Plus, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuIndicator,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

export default function Navbar({ home = false }) {
  const router = useRouter();
  const { pathname } = router;

  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const togglemenu = () => {
    setShowMenu((prev) => !prev);
  };

  const [top, setTop] = React.useState(true);

  React.useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const routes = [
    {
      name: 'About',
      href: '/',
      isIncluded: false
    },
    {
      name: 'Services',
      href: '/',
      isIncluded: true,
    },
    {
      name: 'Our Work',
      href: '/',
      isIncluded: true
    },
    {
      name: 'Contact Us',
      href: '/',
      isIncluded: true
    }
  ];

  return (
    <header className={`fixed top-0 z-20 w-full shadow-lg`}>
      <nav className={` bg-white px-4 py-2.5 lg:px-6`}>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between md:container">
          <Link href="/" className="flex items-center">
            <img
              src="/assets/logo/logo.svg"
              className="h-19 mr-3 md:h-16"
              alt="Meem-48 Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2 lg:hidden">
            <button
              onClick={togglemenu}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className=" inline-flex items-center rounded-lg p-2 text-sm  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-full block sm:hidden">
            <div
              className={`${
                showMenu ? 'h-[170px] overflow-auto ' : 'h-0 overflow-hidden '
              }lg:h-auto md:auto w-full items-center justify-between  transition-all ease-in lg:order-1 lg:flex lg:w-auto`}
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                {routes.map((route) => {
                  const active =
                    pathname === route.href ||
                    (route.isIncluded && pathname.includes(route.href));
                  return (
                    <li key={route.name}>
                      <Link
                        href={route.href}
                        className={`text-sm font-medium text-black
                        ${
                          active
                            ? 'decoration-accentPrimary  block rounded py-2 pl-3  pr-4  underline underline-offset-8 ease-in lg:bg-transparent lg:p-0'
                            : 'block border-b border-gray-100 py-2 pl-3  pr-4 lg:border-0 lg:p-0 lg:hover:bg-transparent'
                        }`}
                        aria-current="page"
                      >
                        {route.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <div
              className="lg:h-auto md:auto w-full items-center justify-between  transition-all ease-in lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <NavigationMenu>
                <NavigationMenuList>
                  {routes.map((route) => {
                    const active =
                      pathname === route.href ||
                      (route.isIncluded && pathname.includes(route.href));
                    return (
                      <NavigationMenuItem key={route.name}>
                        <Link href={route.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {route.name}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                  <NavigationMenuIndicator />
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue hover:text-blue-foreground focus:bg-blue focus:text-blue-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
