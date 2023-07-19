import { kakaopay } from "../../lib/payments";
import { deviceCheck } from "@/app/lib/utils";

export default function KakaoPayment({
  iframeBox,
  iframe,
}: {
  iframeBox: React.MutableRefObject<HTMLDivElement | null>;
  iframe: React.MutableRefObject<HTMLIFrameElement | null>;
}) {
  const device = deviceCheck();

  const createIframe = async (url: string) => {
    // iframe 생성
    iframe.current = document.createElement("iframe");
    iframe.current.id = "iframe";
    iframe.current.name = "param";
    iframe.current.src = url;
    iframeBox.current?.appendChild(iframe.current);

    iframe.current.style.display = "block";
  };

  async function startPayment() {
    const res = await kakaopay();
    let url = null;
    console.log("kakaopay 응답 결과 : ", res);

    if (res.status === 200) {
      if (device === "mobile") {
        url = res.data.next_redirect_mobile_url;
      } else {
        url = res.data.next_redirect_pc_url;
      }
      console.log("url : ", url);
      createIframe(url);
    }
  }

  return (
    <>
      <button onClick={startPayment} className="btn btn-primary mx-1">
        카카오페이
      </button>
    </>
  );
}
