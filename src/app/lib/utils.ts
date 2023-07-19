export function deviceCheck() {
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.indexOf("mobile") > -1) return "mobile";
  else return "pc";
}

export const createIframe = async ({ iframeBox, iframe, url }: IframeType) => {
  // iframe 생성
  iframe.current = document.createElement("iframe");
  iframe.current.id = "iframe";
  iframe.current.name = "param";
  if (url) {
    iframe.current.src = url;
  }
  iframeBox.current?.appendChild(iframe.current);

  iframe.current.style.display = "block";
};
