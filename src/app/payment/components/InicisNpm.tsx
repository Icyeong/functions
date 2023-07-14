"use client";

import { ReactInicis } from "@hellojh/react-inicis";
import { ChangeEvent, useState } from "react";

export default function Inicis() {
  const [isPurchase, setIsPurchase] = useState(0);

  const [payData, setPayData] = useState({
    productName: "prdName",
    buyerName: "hellojh",
    buyerTel: "01011112222",
    buyerEmail: "test@test.com",
    productPrice: 1000,
    payStatus: 0,
    returnUrl: "http://localhost:3000",
    closeUrl: "http://localhost:3000/close",
  });

  const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    let newObj = payData;
    newObj.productPrice = parseInt(e.target.value);
    setPayData({ ...newObj });
  };

  return (
    <div className="App">
      <input
        type="text"
        readOnly
        placeholder="prd name"
        value={payData.productName}
      />
      <input
        type="text"
        readOnly
        placeholder="your name"
        value={payData.buyerName}
      />
      <input
        type="text"
        readOnly
        placeholder="mobile"
        value={payData.buyerTel}
      />
      <input
        type="text"
        readOnly
        placeholder="email"
        value={payData.buyerEmail}
      />

      <input
        type="number"
        placeholder="price"
        value={payData.productPrice}
        onChange={onChangePrice}
      />
      <button
        className="purchaseBtn"
        onClick={() => setIsPurchase(isPurchase + 1)}
      >
        결제
      </button>
      <ReactInicis payData={payData} isPurchase={isPurchase} isTest />
    </div>
  );
}
