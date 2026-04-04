import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Img4k({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <circle cx="5.25" cy="8.25" fill={fill} r="1.25" strokeWidth="0" />
        <path
          d="m14.25,8.207c-.4141,0-.75.3359-.75.75v1.7324l-1.3057-1.3057c-1.0723-1.0723-2.8164-1.0723-3.8887,0l-5.5641,5.5645c-.1406-.2021-.2415-.4338-.2415-.6982V5.75c0-.6895.5605-1.25,1.25-1.25h.2954c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-.2954c-1.5166,0-2.75,1.2334-2.75,2.75v8.5c0,1.5166,1.2334,2.75,2.75,2.75h8.5c1.5166,0,2.75-1.2334,2.75-2.75v-5.293c0-.4141-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7,5.5h2.5v.5c0,.4141.3359.75.75.75s.75-.3359.75-.75v-.5h.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-.5V.75c0-.4141-.3359-.75-.75-.75h-.375c-.2251,0-.4385.1011-.5806.2754l-2.875,3.5186c-.1099.1338-.1694.3018-.1694.4746v.4814c0,.4141.3359.75.75.75Zm2.5-3.106v1.606h-1.312l1.312-1.606Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m16.1514,2.9595l1.6367-1.687c.2886-.2974.2812-.7725-.0156-1.0605-.2974-.2886-.7715-.2808-1.0605.0156l-2.2119,2.28V.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v5.25c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1.3381l.5812-.5991,1.5418,2.3489c.144.2192.3833.3384.6274.3384.1416,0,.2842-.0396.4111-.123.3462-.2271.4429-.6924.2153-1.0386l-1.7255-2.6289Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Img4k;
