import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldUpFromLine({
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
          d="M13.854,7.439L9.391,1.833c-.2-.251-.582-.251-.782,0L4.146,7.439c-.261,.328-.028,.811,.391,.811h2.213v4c0,.552,.448,1,1,1h2.5c.552,0,1-.448,1-1v-4h2.213c.419,0,.652-.484,.391-.811Z"
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
          x1="11.25"
          x2="6.75"
          y1="16.25"
          y2="16.25"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldUpFromLine;
