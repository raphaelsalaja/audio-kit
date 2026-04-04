import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AreaLight({
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
          d="m5.5,2.25c0,1.933,1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5v-.75h-7v.75Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m12.5,2.25c0,1.933-1.567,3.5-3.5,3.5s-3.5-1.567-3.5-3.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m3.9547,12.25h10.0906c.4226,0,.7996.2657.9417.6637l.5357,1.5c.2326.6512-.2502,1.3363-.9417,1.3363H3.419c-.6915,0-1.1743-.6851-.9417-1.3363l.5357-1.5c.1421-.398.5191-.6637.9417-.6637Z"
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
          x1="3"
          x2="1.75"
          y1="2.25"
          y2="2.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="4.757"
          x2="3.873"
          y1="6.493"
          y2="7.376"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.243"
          x2="14.126"
          y1="6.493"
          y2="7.376"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="15"
          x2="16.25"
          y1="2.25"
          y2="2.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="8.25"
          y2="9.5"
        />
      </g>
    </svg>
  );
}

export default AreaLight;
