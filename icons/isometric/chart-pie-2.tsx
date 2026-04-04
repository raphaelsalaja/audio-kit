import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartPie2({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M23.5 10.7924L22.654 12.2509L19.5517 13.5086V9.58658L21.5163 9.04204L23.5 7.00006V10.7924Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M23.5 6.5V10.5C23.5 12.6421 19.2906 14.3909 14.0001 14.4951C13.724 14.5005 13.5 14.2761 13.5 14V12.5M3.5 6.5V10C3.5 10.2761 3.72386 10.5 4 10.5H13.5"
          stroke={fill}
        />
        <path
          d="M13.5 12.5V7C13.5 6.72386 13.2761 6.5 13 6.5H3.5"
          stroke={fill}
        />
        <path
          d="M10.5 17.5002V21.3401C4.9772 21.3401 0.653816 19.5458 0.558719 17.5V13.8654"
          stroke={fill}
          strokeLinejoin="round"
        />
        <path
          d="M0.57497 13.9922C1.18148 15.9691 5.39384 17.5 10.5 17.5V14C10.5 13.7239 10.2761 13.5 10 13.5H1C0.723858 13.5 0.493976 13.7282 0.57497 13.9922Z"
          stroke={fill}
          strokeLinecap="square"
        />
        <path
          d="M13.5 10.5C19.0229 10.5 23.5 8.70912 23.5 6.5C23.5 4.29086 19.0229 2.5 13.5 2.5C7.9772 2.5 3.5 4.29086 3.5 6.5"
          stroke={fill}
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
}

export default ChartPie2;
