import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MobileWave({
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
          d="M14.25,11.25v3c0,1.105-.895,2-2,2H5.75c-1.105,0-2-.895-2-2v-2.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75,6.75V3.75c0-1.105,.895-2,2-2h6.5c1.105,0,2,.895,2,2v2.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1,9.25H5.25c.552,0,1-.448,1-1v-1.625c0-.759,.616-1.375,1.375-1.375h0c.759,0,1.375,.616,1.375,1.375v4.75c0,.759,.616,1.375,1.375,1.375h0c.759,0,1.375-.616,1.375-1.375v-1.625c0-.552,.448-1,1-1h4.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MobileWave;
