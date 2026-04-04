import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Quickstart({
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
          d="M9.00004 16.25C12.4518 16.25 15.25 13.4518 15.25 10C15.25 6.54822 12.4518 3.75 9.00004 3.75C7.04758 3.75 3.67807 5.25604 3.6781 7.5H5.00004C6.24268 7.5 7.25004 8.50736 7.25004 9.75C7.25004 10.0142 7.20451 10.2677 7.12087 10.5032C8.30733 10.566 9.25004 11.5479 9.25004 12.75C9.25004 13.9926 8.24268 15 7.00004 15H6.5832C6.5832 15.5508 7.84297 16.25 9.00004 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.75 12.75H7"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 9.75H5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 1.25H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 1.25V3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 7.75L9 10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 2.75L16.25 4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.58571 15.75C7.32971 16.0645 8.14142 16.25 9.00002 16.25C12.452 16.25 15.25 13.4519 15.25 10C15.25 6.5481 12.452 3.75 9.00002 3.75C6.74272 3.75 4.78172 4.9565 3.68402 6.75"
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

export default Quickstart;
