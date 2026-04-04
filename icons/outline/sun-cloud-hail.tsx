import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SunCloudHail({
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
          d="M8.251,6.826c0-.025,0-.05,0-.076,0-1.657,1.343-3,3-3s3,1.343,3,3c0,.084-.003,.168-.01,.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.418,14.16c1.056-.292,1.832-1.261,1.832-2.41,0-1.381-1.119-2.5-2.5-2.5-.413,0-.797,.11-1.14,.287-.427-1.602-1.874-2.787-3.61-2.787-1.736,0-3.182,1.186-3.61,2.787-.343-.177-.727-.287-1.14-.287-1.381,0-2.5,1.119-2.5,2.5,0,1.149,.775,2.117,1.832,2.41"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.585,10.499c.239-.413,.594-.752,1.02-.972"
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
          x2="11.25"
          y1=".75"
          y2="1.25"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="15.493"
          x2="15.139"
          y1="2.507"
          y2="2.861"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.007"
          x2="7.361"
          y1="2.507"
          y2="2.861"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="17.25"
          x2="16.75"
          y1="6.75"
          y2="6.75"
        />
        <circle
          cx="11.75"
          cy="17.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="6.25"
          cy="17.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle cx="9" cy="15.75" fill={secondaryfill} r=".75" stroke="none" />
        <circle
          cx="11.75"
          cy="14.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="6.25"
          cy="14.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle cx="9" cy="12.75" fill={secondaryfill} r=".75" stroke="none" />
      </g>
    </svg>
  );
}

export default SunCloudHail;
