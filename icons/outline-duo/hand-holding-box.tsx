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
          d="M13.25 0.75C14.3546 0.750004 15.25 1.64543 15.25 2.75V6.25C15.25 7.35457 14.3546 8.25 13.25 8.25L12.0488 8.81152C11.8272 8.63952 11.5829 8.48928 11.3164 8.36816C9.95681 7.74779 8.60385 6.90833 7.11328 6.64844C7.15906 6.5123 7.25 6.35891 7.25 6.25V2.75C7.25 1.64543 8.14543 0.75 9.25 0.75H13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2 9.75H0V16.75H2C2.55228 16.75 3 16.3023 3 15.75V10.75C3 10.1977 2.55228 9.75 2 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 0.75V3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.437 12.965L15.254 10.791C15.966 10.47 16.803 10.786 17.125 11.498C17.446 12.21 17.13 13.047 16.418 13.369L9.62701 16.434C8.95101 16.739 8.18601 16.783 7.47901 16.557L3.00101 15.125"
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
          d="M0.75 9.75H2C2.552 9.75 3 10.198 3 10.75V15.75C3 16.302 2.552 16.75 2 16.75H0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5331 8.25H13.25C14.355 8.25 15.25 7.354 15.25 6.25V2.75C15.25 1.646 14.355 0.75 13.25 0.75H9.25C8.145 0.75 7.25 1.646 7.25 2.75V5.9195"
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
