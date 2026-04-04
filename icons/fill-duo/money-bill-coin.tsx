import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoneyBillCoin({
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
          d="M3.75 1C2.23079 1 1 2.23079 1 3.75V10.25C1 11.7692 2.23079 13 3.75 13H7.5V12C7.5 11.1824 7.89273 10.4561 8.5 9.99989V9C8.5 7.61987 9.61898 6.5 11 6.5H17V3.75C17 2.23079 15.7692 1 14.25 1H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 7.75C4.664 7.75 5 7.414 5 7C5 6.586 4.664 6.25 4.25 6.25C3.836 6.25 3.5 6.586 3.5 7C3.5 7.414 3.836 7.75 4.25 7.75Z"
          fill={fill}
        />
        <path
          d="M16 11L10 11C9.4477 11 9 11.448 9 12V13C9 13.552 9.4477 14 10 14H16C16.5523 14 17 13.552 17 13V12C17 11.448 16.5523 11 16 11Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17 8H11C10.4477 8 10 8.448 10 9V10C10 10.552 10.4477 11 11 11H17C17.5523 11 18 10.552 18 10V9C18 8.448 17.5523 8 17 8Z"
          fill={fill}
        />
        <path
          d="M8.5 9.1943V9C8.5 7.61987 9.61898 6.5 11 6.5H11.1943C10.9671 5.49772 10.0713 4.75 9 4.75C7.75688 4.75 6.75 5.75688 6.75 7C6.75 8.07126 7.49772 8.96709 8.5 9.1943Z"
          fill={fill}
        />
        <path
          d="M17 14H11C10.4477 14 10 14.448 10 15V16C10 16.552 10.4477 17 11 17H17C17.5523 17 18 16.552 18 16V15C18 14.448 17.5523 14 17 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoneyBillCoin;
