import Link from "next/link";

export default function Sidebar() {
  const navMenus = [
    { title: "회원가입", linkTo: "/signup" },
    { title: "본인인증", linkTo: "/auth" },
    { title: "로그인", linkTo: "/signin" },
    { title: "회원정보", linkTo: "/member" },
    { title: "토큰재발급", linkTo: "/token" },
    { title: "메뉴5", linkTo: "/test5" },
    { title: "메뉴6", linkTo: "/test6" },
  ];

  return (
    <div className="w- min-h-screen bg-slate-700">
      <div className="sticky top-0">
        <Link href="/">
          <h1 className="text-white p-3 text-center text-base bg-slate-900">
            Functions
          </h1>
        </Link>
        <ul className="w-full">
          {navMenus.map((navMenu, i) => (
            <Link
              key={i}
              className="text-white text-base"
              href={navMenu.linkTo}
            >
              <li className="p-2 flex hover:bg-slate-600 justify-center">
                {navMenu.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
