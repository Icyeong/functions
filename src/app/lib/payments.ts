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
  callbackUrl: `https://dapi-dev.dominos.co.kr/payment/naverpay/result`,
};

export function inicispay() {
  return alert("Inicispay payment");
}

export async function naverpay() {
  const res = await fetch(
    "https://dapi-dev.dominos.co.kr/payment/ready/naver",
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer 1234`,
      },
      method: "POST",
      body: JSON.stringify(fetchData),
    }
  );

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}

export async function kakaopay() {
  const res = await fetch(
    "https://dapi-dev.dominos.co.kr/payment/ready/kakao",
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer 1234`,
      },
      method: "POST",
      body: JSON.stringify(fetchData),
    }
  );

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}

export async function payco() {
  const res = await fetch(
    "https://dapi-dev.dominos.co.kr/payment/ready/payco",
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer 1234`,
      },
      method: "POST",
      body: JSON.stringify(fetchData),
    }
  );

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
