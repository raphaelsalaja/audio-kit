import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Rings({
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
          d="M9 4.82355C7.64444 5.71791 6.75 7.25452 6.75 9.00004C6.75 10.7455 7.64444 12.2821 9 13.1765C10.3556 12.2821 11.25 10.7455 11.25 9.00004C11.25 7.25452 10.3556 5.71791 9 4.82355Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.25 14C9.011 14 11.25 11.761 11.25 9C11.25 6.239 9.011 4 6.25 4C3.489 4 1.25 6.239 1.25 9C1.25 11.761 3.489 14 6.25 14Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.997 13.175C7.643 12.28 6.75 10.745 6.75 9C6.75 6.239 8.989 4 11.75 4C14.511 4 16.75 6.239 16.75 9C16.75 11.4928 14.9263 13.5588 12.5402 13.9376"
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

export default Rings;
