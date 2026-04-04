import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleImg4k({
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
        <path
          d="m12.25,4.75c0-.4141-.3359-.75-.75-.75h-.5V.75c0-.4141-.3359-.75-.75-.75h-.375c-.2251,0-.4385.1011-.5806.2754l-2.875,3.5186c-.1099.1338-.1694.3018-.1694.4746v.4814c0,.4141.3359.75.75.75h2.5v.5c0,.4141.3359.75.75.75s.75-.3359.75-.75v-.5h.5c.4141,0,.75-.3359.75-.75Zm-2.75-.75h-1.312l1.312-1.606v1.606Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16.1514,2.9595l1.6367-1.687c.2886-.2974.2812-.7725-.0156-1.0605-.2979-.2886-.772-.2808-1.0605.0156l-2.2119,2.28V.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v5.25c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1.3381l.5812-.5991,1.5418,2.3489c.144.2192.3833.3384.6274.3384.1416,0,.2842-.0396.4111-.123.3462-.2271.4429-.6924.2153-1.0386l-1.7255-2.6289Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m1.75,6.5c.4141,0,.75-.3359.75-.75,0-.6895.5605-1.25,1.25-1.25.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75c-1.5166,0-2.75,1.2334-2.75,2.75,0,.4141.3359.75.75.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m14.25,13.5c-.4141,0-.75.3359-.75.75,0,.6895-.5605,1.25-1.25,1.25-.4141,0-.75.3359-.75.75s.3359.75.75.75c1.5166,0,2.75-1.2334,2.75-2.75,0-.4141-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m14.25,8c-.4141,0-.75.3359-.75.75v2.5c0,.4141.3359.75.75.75s.75-.3359.75-.75v-2.5c0-.4141-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m2,11.5c-.342,0-.6753.0354-1,.0952v3.1548c0,1.2407,1.0093,2.25,2.25,2.25h4.25c0-3.0376-2.4625-5.5-5.5-5.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <rect
          height="9.5"
          width="9.5"
          fill={secondaryfill}
          opacity=".4"
          rx="2.25"
          ry="2.25"
          strokeWidth="0"
          x="1"
          y="7.5"
        />
        <circle cx="7.25" cy="10.75" fill={fill} r="1.25" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default ScaleImg4k;
