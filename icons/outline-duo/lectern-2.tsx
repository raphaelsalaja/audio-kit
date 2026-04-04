import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Lectern2({
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
          d="m4.6714,3.25h8.6573c.4061,0,.7718.2455.9255.6214l1.4318,3.5c.2691.6579-.2147,1.3786-.9255,1.3786H3.2395c-.7108,0-1.1947-.7207-.9255-1.3786l1.4318-3.5c.1537-.3758.5195-.6214.9255-.6214Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m4.6714,3.25h8.6573c.4061,0,.7718.2455.9255.6214l1.4318,3.5c.2691.6579-.2147,1.3786-.9255,1.3786H3.2395c-.7108,0-1.1947-.7207-.9255-1.3786l1.4318-3.5c.1537-.3758.5195-.6214.9255-.6214Z"
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
          x1="5.25"
          x2="12.75"
          y1="15.25"
          y2="15.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="15.25"
          y2="11.75"
        />
      </g>
    </svg>
  );
}

export default Lectern2;
