import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bra({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="2.25"
          x2="2.25"
          y1="3"
          y2="8.243"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="15.75"
          x2="15.75"
          y1="3"
          y2="8.243"
        />
        <path
          d="M2.25,8.243c-.718,1.361-.668,3.031,.117,4.283,.065,.103,1.103,1.851,3.214,1.709s3.263-1.579,3.419-1.985v.002c-.682-1.009-1.375-1.918-2.788-2.852-1.516-1.002-3.153-1.157-3.962-1.157Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75,8.243c.718,1.361,.668,3.031-.117,4.283-.065,.103-1.103,1.851-3.214,1.709s-3.263-1.579-3.419-1.985v.002c.682-1.009,1.375-1.918,2.788-2.852,1.516-1.002,3.153-1.157,3.962-1.157Z"
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

export default Bra;
