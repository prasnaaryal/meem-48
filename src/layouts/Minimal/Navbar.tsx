import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-30 mb-4 mt-6 flex w-full flex-wrap items-center justify-between px-4 py-2 shadow-none lg:flex-nowrap lg:justify-start">
      <div className="container flex flex-wrap items-center justify-between lg:flex-nowrap">
        <Link
          className="ml-4 mr-4 whitespace-nowrap py-2.5 text-sm font-bold text-white lg:ml-0"
          href="/"
        >
          Soft UI Dashboard PRO
        </Link>
        <button
          aria-expanded="false"
          nav-collapse-trigger=""
          className="ml-2 cursor-pointer rounded-lg bg-transparent px-3 py-1 text-lg leading-none text-slate-700 shadow-none lg:hidden"
        >
          <span className="mt-2 inline-block h-6 w-6 bg-none align-middle">
            <span className="w-5.5 rounded-px origin-10-10 relative mx-auto my-0 block h-px bg-white transition-all duration-200"></span>
            <span className="w-5.5 rounded-px mt-1.75 relative mx-auto my-0 block h-px bg-white transition-all duration-200"></span>
            <span className="w-5.5 rounded-px mt-1.75 origin-10-90 relative mx-auto my-0 block h-px bg-white transition-all duration-200"></span>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
