import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Report({
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
          d="m11.75,6.25c-.552,0-1-.448-1-1V1.8521l.0002-.0049c-.1297-.0596-.2687-.0972-.4142-.0972h-5.586c-1.1046,0-2,.8955-2,2v10.5c0,1.1045.8954,2,2,2h8.4377c1.0937,0,1.9846-.8784,1.9998-1.9722l.0625-7.6135c0-.1455-.0376-.2844-.0972-.4143h-3.4028Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m15.16,6.25h-3.41c-.552,0-1-.448-1-1V1.852"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2.75,14.25V3.75c0-1.105.895-2,2-2h5.586c.265,0,.52.105.707.293l3.914,3.914c.188.188.293.442.293.707v7.586c0,1.105-.895,2-2,2H4.75c-1.105,0-2-.895-2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="13.25"
          y2="8"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.25"
          x2="6.25"
          y1="13.25"
          y2="10.5"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.75"
          x2="11.75"
          y1="13.25"
          y2="11.75"
        />
      </g>
    </svg>
  );
}

export default Report;
