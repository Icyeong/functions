"use client";

type nav = { title: string; navTo: string };

export default function Header() {
  const path = "signin";

  const headerMenus: any = {
    signup: {
      navs: [
        { title: "tab1", navTo: "/tab1" },
        { title: "tab2", navTo: "/tab2" },
        { title: "tab3", navTo: "/tab3" },
      ],
    },
    signin: {
      navs: [
        { title: "tab1", navTo: "/tab1" },
        { title: "tab2", navTo: "/tab2" },
        { title: "tab1", navTo: "/tab3" },
      ],
    },
  };

  const navs = headerMenus[path] ? headerMenus[path].navs : undefined;

  return (
    <header className="w-full sticky top-0 text-white p-3 flex justify-end text-base bg-slate-900">
      {navs && (
        <nav>
          {navs.map((nav: nav) => (
            <button className="px-3 hover:text-yellow-100" key={nav.title}>
              {nav.title}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
