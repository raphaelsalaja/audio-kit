import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseModern3({
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
          d="M16.25 14.5H15V7.40501L16.04 7.70801C16.11 7.72801 16.181 7.73801 16.25 7.73801C16.575 7.73801 16.875 7.52601 16.97 7.19801C17.086 6.80001 16.858 6.38401 16.46 6.26801L1.95999 2.04201C1.55999 1.92801 1.14599 2.15501 1.02999 2.55201C0.913985 2.95001 1.14199 3.36601 1.53999 3.48201L2.99999 3.90801V14.5H1.74999C1.33599 14.5 0.999985 14.836 0.999985 15.25C0.999985 15.664 1.33599 16 1.74999 16H8.5V12.5C8.5 11.6716 9.17157 11 9.99999 11C10.8284 11 11.5 11.6716 11.5 12.5V16H16.25C16.664 16 17 15.664 17 15.25C17 14.836 16.664 14.5 16.25 14.5ZM8 8C8 8.552 7.552 9 7 9C6.448 9 6 8.552 6 8C6 7.448 6.448 7 7 7C7.552 7 8 7.448 8 8Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HouseModern3;
