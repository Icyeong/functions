export async function getMenuList() {
  // const res = await fetch("https://dapi-dev.dominos.co.kr/example", {
  //   headers: {
  //     "Content-type": "application/json",
  //     Authorization: `Bearer 1234`,
  //   },
  //   // method: "GET",
  // });

  // if (!res.ok) throw new Error("failed to fetch data");

  // return res.json();
  return dummyData.premium;
}

// export async function getMenuDetail() {
//   const res = await fetch("https://dapi-dev.dominos.co.kr/example", {
//     headers: {
//       "Content-type": "application/json",
//       Authorization: `Bearer 1234`,
//     },
//     // method: "GET",
//   });

//   if (!res.ok) throw new Error("failed to fetch data");

//   return res.json();
// }

const dummyData = {
  New: [
    {
      id: 1,
      menuName: "아보카도 새우",
      price: { medium: "20,500", large: "27,900" },
      breif: ["#슈퍼시드 화이버 함유 도우로 더 맛있게!"],
      imgUrl:
        "https://cdn.dominos.co.kr/admin/upload/goods/20230117_97ySneQn.jpg",
    },
    {
      id: 2,
      menuName: "크랩&립 하우스",
      price: { medium: "29,000", large: "34,900" },
      breif: [
        "#스노우 크랩&치즈의 눈꽃 축제와 립 스테이크의 불꽃 축제!",
        "#글로벌 축제의 맛이 하프앤하프로 만나다!",
      ],
      imgUrl:
        "https://cdn.dominos.co.kr/admin/upload/goods/20221215_SK9YopZX.jpg",
    },
    {
      id: 3,
      menuName: "대만 콘 치즈 감자",
      price: { large: "17,900" },
      breif: [
        "#도미노 스트릿 피자! 마음까지 들뜨는 가격",
        "#대만 야시장의 왕자 감자 치즈를 듬뿍 담은 피자",
      ],
      imgUrl:
        "https://cdn.dominos.co.kr/admin/upload/goods/20221117_h8989d1D.jpg",
    },
    {
      id: 4,
      menuName: "이탈리아 마르게리따NE",
      price: { large: "17,900" },
      breif: [
        "#도미노 스트릿 피자! 마음까지 들뜨는 가격",
        "#이탈리아 전통의 맛! 피자 마르게리따!",
      ],
      imgUrl:
        "https://cdn.dominos.co.kr/admin/upload/goods/20221117_V7ZfEQKb.jpg",
    },
  ],
  premium: [
    {
      id: 1,
      menuName: "아보카도 새우",
      price: { medium: "20,500", large: "27,900" },
      breif: ["#슈퍼시드 화이버 함유 도우로 더 맛있게!"],
      imgUrl:
        "https://cdn.dominos.co.kr/admin/upload/goods/20230117_97ySneQn.jpg",
    },
    {
      id: 2,
      menuName: "크랩&립 하우스",
      price: { medium: "29,000", large: "34,900" },
      breif: [
        "#스노우 크랩&치즈의 눈꽃 축제와 립 스테이크의 불꽃 축제!",
        "#글로벌 축제의 맛이 하프앤하프로 만나다!",
      ],
      imgUrl:
        "https://cdn.dominos.co.kr/admin/upload/goods/20221215_SK9YopZX.jpg",
    },
    {
      id: 3,
      menuName: "와일드 와일드 웨스트 스테이크",
      price: { medium: "28,000", large: "33,900" },
      breif: [
        "‘카우보이’들이 즐겨 먹던 정통 ‘그릴드 비프 스테이크'의 재현!",
        "#‘그릴드 비프’와 ‘카우보이 버터 치즈 소스’로 만들어 내는 맛의 조화!",
      ],
      imgUrl:
        "https://cdn.dominos.co.kr/admin/upload/goods/20220830_c3Lh4i3H.jpg",
    },
    {
      id: 4,
      menuName: "블랙타이거 슈림프",
      price: { medium: "30,000", large: "36,900 " },
      breif: ["#바다와 육지의 대왕이 하나로"],
      imgUrl:
        "https://cdn.dominos.co.kr/admin/upload/goods/20200508_780B32i8.jpg",
    },
    {
      id: 5,
      menuName: "블록버스터4",
      price: { medium: "29,000", large: "36,900  " },
      breif: ["#4개 도시의 프리미엄 요리를 품은 블록버스터급 콰트로 피자!"],
      imgUrl:
        "https://cdn.dominos.co.kr/admin/upload/goods/20230320_3O13465f.jpg",
    },
    {
      id: 6,
      menuName: "블랙앵거스 스테이크",
      price: { medium: "29,500", large: "35,900" },
      breif: ["#블랙앵거스 비프에 랍스터볼까지"],
      imgUrl:
        "https://cdn.dominos.co.kr/admin/upload/goods/20200508_1fYuDcMq.jpg",
    },
    {
      id: 7,
      menuName: "베스트 콰트로",
      price: { medium: "29,500", large: "36,900 " },
      breif: ["#4가지 피자를 한판에"],
      imgUrl:
        "https://cdn.dominos.co.kr/admin/upload/goods/20200311_Ocjdqmm6.jpg",
    },
  ],
};
