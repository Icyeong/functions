declare module "@hellojh/react-inicis";

type IframeType = {
  iframeBox: React.MutableRefObject<HTMLDivElement | null>;
  iframe: React.MutableRefObject<HTMLIFrameElement | null>;
  url?: string;
};
