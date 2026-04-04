import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartCandlestick({
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
          d="M4.25 5.75H2.25C1.97386 5.75 1.75 5.97386 1.75 6.25V9.75C1.75 10.0261 1.97386 10.25 2.25 10.25H4.25C4.52614 10.25 4.75 10.0261 4.75 9.75V6.25C4.75 5.97386 4.52614 5.75 4.25 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 2.75H13.75C13.4739 2.75 13.25 2.97386 13.25 3.25V10.75C13.25 11.0261 13.4739 11.25 13.75 11.25H15.75C16.0261 11.25 16.25 11.0261 16.25 10.75V3.25C16.25 2.97386 16.0261 2.75 15.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.25 10.25V13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 1.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 5.75H2.25C1.97386 5.75 1.75 5.97386 1.75 6.25V9.75C1.75 10.0261 1.97386 10.25 2.25 10.25H4.25C4.52614 10.25 4.75 10.0261 4.75 9.75V6.25C4.75 5.97386 4.52614 5.75 4.25 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.25V16.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 7.25H8C7.72386 7.25 7.5 7.47386 7.5 7.75V11.75C7.5 12.0261 7.72386 12.25 8 12.25H10C10.2761 12.25 10.5 12.0261 10.5 11.75V7.75C10.5 7.47386 10.2761 7.25 10 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 11.25V14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 2.75H13.75C13.4739 2.75 13.25 2.97386 13.25 3.25V10.75C13.25 11.0261 13.4739 11.25 13.75 11.25H15.75C16.0261 11.25 16.25 11.0261 16.25 10.75V3.25C16.25 2.97386 16.0261 2.75 15.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.25V7.25"
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

export default ChartCandlestick;
