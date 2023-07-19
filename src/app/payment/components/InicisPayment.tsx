import { useRef } from "react";

export default function InicisPayment({
  iframeBox,
  iframe,
}: {
  iframeBox: React.MutableRefObject<HTMLDivElement | null>;
  iframe: React.MutableRefObject<HTMLIFrameElement | null>;
}) {
  const form = useRef<HTMLFormElement>(null as unknown as HTMLFormElement);

  const inicisPay = async () => {
    // iframe 생성
    iframe.current = document.createElement("iframe");
    iframe.current.id = "iframe";
    iframe.current.name = "param";
    iframeBox.current?.appendChild(iframe.current);

    if (form.current && iframe.current) {
      (form.current as HTMLFormElement).action =
        "https://dapi-dev.dominos.co.kr/payment/inicisReady";
      (form.current as HTMLFormElement).method = "post";
      const res = await (form.current as HTMLFormElement).submit();
      iframe.current.style.display = "block";

      console.log("form data : ", res);
    }
  };

  return (
    <>
      <button onClick={inicisPay} className="btn btn-primary mx-1">
        카드결제
      </button>
      <form
        ref={form}
        method="post"
        id="SendPayForm_id"
        name="approvalForm"
        target="param"
        className="inicisForm"
      >
        <input
          type="text"
          id="callbackUrl"
          name="callbackUrl"
          defaultValue="https://dapi-dev.dominos.co.kr/payment/inicisCard/result"
        />
        <input
          type="text"
          id="closeUrl"
          name="closeUrl"
          defaultValue="http://localhost:3001/payment/inicis/close"
        />
        <input
          type="text"
          id="payType"
          name="payType"
          defaultValue="inicisCard"
        />
        <input
          type="text"
          id="paymentId"
          name="paymentId"
          defaultValue="202305120001"
        />
        <input
          type="text"
          id="settlementMethod"
          name="settlementMethod"
          defaultValue="N"
        />
        <input
          type="text"
          id="branchCode"
          name="branchCode"
          defaultValue="97999"
        />
        <input
          type="text"
          id="orderPrmtCode"
          name="orderPrmtCode"
          defaultValue=""
        />
        <input
          type="text"
          id="totalPrice"
          name="totalPrice"
          defaultValue="1000"
        />
        <input
          type="text"
          id="id"
          name="id"
          defaultValue="domino"
          placeholder="회원아이디"
        />
        <input
          type="text"
          id="name"
          name="name"
          defaultValue="도미노"
          placeholder="회원이름"
        />
        <input
          type="text"
          id="tel"
          name="tel"
          defaultValue="010-7770-5481"
          placeholder="전화번호"
        />
        <input
          type="text"
          id="email"
          name="email"
          defaultValue="hspark@chonf.co.kr"
          placeholder="이메일"
        />
        <input
          type="hidden"
          id="wpayUserKey"
          name="wpayUserKey"
          defaultValue="ST202302220002315013"
        />
        <input type="hidden" id="wpayToken" name="wpayToken" defaultValue="" />
        <input
          type="hidden"
          id="bankCardCode"
          name="bankCardCode"
          defaultValue=""
        />
        <input type="hidden" id="payMethod" name="payMethod" defaultValue="" />
        <input
          name="goodsCode"
          defaultValue="RPZ223SL"
          placeholder="상품코드"
        />
        <input
          name="goodsName"
          defaultValue="뉴욕 오리진"
          placeholder="상품명"
        />
        <input name="goodsCount" defaultValue="1" placeholder="수량" />
        <input name="goodsPrice" defaultValue="1000" placeholder="가격" />
        <input
          name="goodsPrmtCode"
          defaultValue=""
          placeholder="상품프로모션"
        />
        <input
          name="goodsCode"
          defaultValue="RDK001L6"
          placeholder="상품코드"
        />
        <input
          name="goodsName"
          defaultValue="코카콜라 1.25L"
          placeholder="상품명"
        />
        <input name="goodsCount" defaultValue="1" placeholder="수량" />
        <input name="goodsPrice" defaultValue="500" placeholder="가격" />
        <input
          name="goodsPrmtCode"
          defaultValue=""
          placeholder="상품프로모션"
        />
      </form>
    </>
  );
}
