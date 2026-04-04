import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldRightFromLine({
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
          d="M10.561,13.854l5.605-4.463c.251-.2,.251-.582,0-.782l-5.605-4.463c-.328-.261-.811-.028-.811,.391v2.213H5.75c-.552,0-1,.448-1,1v2.5c0,.552,.448,1,1,1h4v2.213c0,.419,.484,.652,.811,.391Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="1.75"
          x2="1.75"
          y1="11.25"
          y2="6.75"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldRightFromLine;
