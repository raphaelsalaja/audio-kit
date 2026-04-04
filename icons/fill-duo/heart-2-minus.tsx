import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Minus({
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
          d="M9.49999 11.75C9.49999 10.5093 10.5093 9.50001 11.75 9.50001H15.9432C16.8869 8.36061 17.2287 6.84131 16.8418 5.36471C16.623 4.53661 16.1465 3.76801 15.5 3.20211C14.3896 2.22751 12.9404 1.83201 11.5312 2.11761C10.5283 2.32021 9.64839 2.83591 8.99799 3.58151C8.95799 3.53661 8.9179 3.49261 8.8769 3.44921C8.0371 2.56491 6.9033 2.06051 5.6835 2.02931C4.4618 2.00151 3.30559 2.44391 2.42179 3.28321C1.53699 4.12301 1.03309 5.25681 1.00089 6.47611C0.969694 7.69581 1.41499 8.85451 2.25869 9.74221L7.7382 15.4351C8.0702 15.7818 8.5185 15.9732 8.9989 15.9732C9.4803 15.9732 9.92859 15.7818 10.2596 15.4361L11.6514 13.9901C10.4572 13.9374 9.49999 12.957 9.49999 11.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.75 12.5H11.75C11.3359 12.5 11 12.1641 11 11.75C11 11.3359 11.3359 11 11.75 11H16.75C17.1641 11 17.5 11.3359 17.5 11.75C17.5 12.1641 17.1641 12.5 16.75 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Heart2Minus;
