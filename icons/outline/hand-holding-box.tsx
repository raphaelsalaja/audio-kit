import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandHoldingBox({
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
          d="M11.25 0.75V3.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.437 12.965L15.254 10.791C15.966 10.47 16.803 10.786 17.125 11.498C17.446 12.21 17.13 13.047 16.418 13.369L9.62698 16.434C8.95098 16.739 8.18597 16.783 7.47897 16.557L3.00098 15.125"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.245 12.098L9.216 12.992C9.927 13.315 10.765 13 11.088 12.289C11.411 11.578 11.096 10.74 10.385 10.417L7.608 9.149C5.312 8.126 3.375 9.688 3 11.501"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5331 8.25H13.25C14.355 8.25 15.25 7.354 15.25 6.25V2.75C15.25 1.646 14.355 0.75 13.25 0.75H9.25C8.145 0.75 7.25 1.646 7.25 2.75V5.9195"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 9.75H2C2.552 9.75 3 10.198 3 10.75V15.75C3 16.302 2.552 16.75 2 16.75H0.75"
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

export default HandHoldingBox;
