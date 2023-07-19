import { naverpay } from "../../lib/payments";
import { deviceCheck } from "@/app/lib/utils";

export default function NaverPayment({ iframeBox, iframe }: IframeType) {
  const device = deviceCheck();

  async function startPayment() {
    const res = await naverpay();
    let url = null;
    console.log("naverpay 응답 결과 : ", res);

    // if (res.status === 200) {
    //   if (device === "mobile") {
    //     url = res.data.next_redirect_mobile_url;
    //   } else {
    //     url = res.data.next_redirect_pc_url;
    //   }
    //   console.log("url : ", url);
    // createIframe({ iframeBox, iframe, url });
    // }
  }

  return (
    <>
      <button onClick={startPayment} className="btn btn-primary mx-1">
        네이버페이
      </button>
    </>
  );
}
