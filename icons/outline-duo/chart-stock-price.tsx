import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartStockPrice({
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
          d="M4.25 14.75H13.75C14.8546 14.75 15.75 13.855 15.75 12.75V5.25C15.75 4.145 14.8546 3.25 13.75 3.25H4.25C3.1454 3.25 2.25 4.145 2.25 5.25V12.75C2.25 13.855 3.1454 14.75 4.25 14.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M12.25 3.25V14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 14.75H13.75C14.8546 14.75 15.75 13.855 15.75 12.75V5.25C15.75 4.145 14.8546 3.25 13.75 3.25H4.25C3.1454 3.25 2.25 4.145 2.25 5.25V12.75C2.25 13.855 3.1454 14.75 4.25 14.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 11.25L5.5 8L8 10.5L12.25 6.25"
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

export default ChartStockPrice;
