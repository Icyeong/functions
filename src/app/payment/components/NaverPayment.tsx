import { useState } from "react";
import { naverpay } from "../../lib/payments";
import { createIframe, deviceCheck } from "@/app/lib/utils";

export default function NaverPayment({ iframeBox, iframe }: IframeType) {
  const device = deviceCheck();
  let naverWin: any = null;
  // let [naverWin, setNaverWin] = useState(null);
  var popOptions =
    "top=50, left=50, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no";

  async function startPayment() {
    const res = await naverpay();
    let url = "https://test-pay.naver.com/payments/";
    console.log("naverpay 응답 결과 : ", res);

    if (res.status === 200) {
      url += res.data.body.reserveId;
      naverWin = window.open(
        "https://test-pay.naver.com/payments/" + res.data.body.reserveId,
        "paymentPop",
        popOptions
      );

      let timer = setInterval(() => {
        if (naverWin.closed) {
          alert("네이버페이 결제 취소!");
          clearInterval(timer);
        }
      }, 1000);

      // }
      // if (device === "mobile") {
      //   url = res.data.next_redirect_mobile_url;
      // } else {
      //   url = res.data.next_redirect_pc_url;
      // }
      // console.log("url : ", url);
      // createIframe({ iframeBox, iframe, url });
    }
  }

  return (
    <>
      <button onClick={startPayment} className="btn btn-primary mx-1">
        네이버페이
      </button>
    </>
  );
}
