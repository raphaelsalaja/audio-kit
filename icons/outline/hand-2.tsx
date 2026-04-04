import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hand2({
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
          d="M10.75,7.75V2.5c0-.69-.564-1.25-1.25-1.25s-1.25,.56-1.25,1.25V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25,7.75V3.75c0-.69-.564-1.25-1.25-1.25s-1.25,.56-1.25,1.25V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25,7.75V3.75c0-.69-.564-1.25-1.25-1.25s-1.25,.56-1.25,1.25v7.465l-1.768-2.252c-.426-.543-1.215-.635-1.755-.211s-.604,1.131-.211,1.755l1.96,3.014c1.107,1.703,3,2.73,5.03,2.73h1.745c2.761,0,5-2.239,5-5V5.25c0-.69-.564-1.25-1.25-1.25s-1.25,.56-1.25,1.25v2.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Hand2;
