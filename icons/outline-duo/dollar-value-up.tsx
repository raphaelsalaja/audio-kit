import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DollarValueUp({
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
        <circle
          cx="9"
          cy="7.75"
          fill={secondaryfill}
          opacity=".3"
          r="6"
          strokeWidth="0"
        />
        <path
          d="m3.904,10.919c-.573-.92-.904-2.006-.904-3.169,0-3.314,2.686-6,6-6s6,2.686,6,6c0,.249-.015.495-.045.737"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2,16.25l2.588-2.588c.254-.254.626-.353.973-.257l6.127,1.69c.347.096.719-.002.973-.257l3.588-3.588"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m16.25,14.75v-3.5h-3.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.8182,5.25h-2.6137c-.6904,0-1.25.5596-1.2501,1.2499h0c0,.6905.5596,1.2503,1.2501,1.2503h1.5912c.6902,0,1.2499.5595,1.2499,1.2498h0c0,.6904-.5596,1.25-1.2499,1.25h-2.614"
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
          y1="4"
          y2="5.0002"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="11.5"
          y2="10.5"
        />
      </g>
    </svg>
  );
}

export default DollarValueUp;
