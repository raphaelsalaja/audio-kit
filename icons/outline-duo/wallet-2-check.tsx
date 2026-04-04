import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wallet2Check({
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
          d="m13,8.25h2.75v-1.75c0-1.105-.895-2-2-2H4.25c-1.105,0-2,.895-2,2v1.5941c0,.1098.1771.1409.267.1154.4721-.1335.9687-.2076,1.483-.2076,3.0327,0,5.5,2.4673,5.5,5.5,0,.5395-.0814,1.0595-.2276,1.5522-.0195.0658.057.1959.2217.1959h4.2559c1.105,0,2-.895,2-2v-1.5h-2.75c-.966,0-1.75-.7839-1.75-1.75,0-.967.784-1.75,1.75-1.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m2.25,6.5c0-1.733,1.249-3.213,2.957-3.505l6.562-1.12c.434-.074.866.145,1.063.539"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.75,11.75h-2.75c-.966,0-1.75-.784-1.75-1.75,0-.967.784-1.75,1.75-1.75h2.75c.552,0,1,.448,1,1v1.5c0,.552-.448,1-1,1Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.75,8.25v-1.5c0-1.105-.895-2-2-2H4.25c-1.105,0-2,.895-2,2v.7519"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.0007,15.25h3.7493c1.105,0,2-.895,2-2v-1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4,9.502c-2.2061,0-4,1.7944-4,4s1.7939,4,4,4,4-1.7944,4-4-1.7939-4-4-4Zm2.3076,3.252l-2.25,2.5c-.1377.1528-.332.2422-.5381.2476-.0068.0005-.0127.0005-.0195.0005-.1982,0-.3896-.0786-.5303-.2197l-1.25-1.25c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l.6914.6909,1.7207-1.9126c.2783-.3066.751-.332,1.0596-.0557.3076.2773.333.7515.0557,1.0596Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Wallet2Check;
