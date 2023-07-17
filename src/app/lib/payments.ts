export function inicispay() {
  return alert("Inicispay payment");
}

export function naverpay() {
  return alert("Naverpay payment");
}

export async function kakaopay() {
  const fetchData = {
    paymentId: 202305120001,
    totalPrice: 10000,
    goods: [
      { goodsName: "포테토" },
      { goodsName: "페퍼로니" }, //상품 여러개 보내도 첫번째 상품 정보만 사용함
    ],
    user: {
      id: "abc123",
      tel: "01012345678",
      email: "aaa@aaa.com",
    },
    callbackUrl: `https://dapi-dev.dominos.co.kr/payment/kakaopay/result`,
  };

  const res = await fetch(
    "https://dapi-dev.dominos.co.kr/payment/kakaopay/approval",
    {
      headers: {},
      method: "POST",
      body: JSON.stringify(fetchData),
    }
  );

  console.log("kakaopay : ", console.log(res.json()));
  return res.json();
}
