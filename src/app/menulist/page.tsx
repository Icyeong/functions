"use client";
import { useState } from "react";
import { getMenuList } from "../lib/menus";

export default function Menulist() {
  const [menulist, setMenulist] = useState([]);

  async function handleGetMenuList() {
    const res = await getMenuList();

    console.log(menulist);
  }
  return (
    <>
      <h2 className="text-lg font-bold mb-2">메뉴 목록 불러오기</h2>
      <button onClick={handleGetMenuList} className="btn btn-primary  mb-4">
        불러오기
      </button>
      <ul className="list-decimal pl-7 pt-2">
        {/* {menulist.map((menu, idx) => (
          <li key={idx}></li>
        ))} */}
      </ul>
      {menulist.length - 0}
      {/* {menulist.length === 0 && <p>메뉴 목록 없음</p>} */}
      <h2 className="text-lg font-bold mt-4">메뉴 상세</h2>
      <ul className="pl-7 p-3 bg-stone-200">
        <li>POST</li>
        <li>http://localhost:8080</li>
        <li> title: string</li>
      </ul>
      <h2 className="text-lg font-bold mt-4">장바구니</h2>
    </>
  );
}
