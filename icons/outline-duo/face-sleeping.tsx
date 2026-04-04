import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSleeping({
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
          d="M12.394 2.88401C11.269 2.16601 9.933 1.75101 8.5 1.75101C4.496 1.75101 1.25 4.99701 1.25 9.00101C1.25 13.005 4.496 16.251 8.5 16.251C12.504 16.251 15.75 13.005 15.75 9.00101C15.75 8.30701 15.8369 7.63601 15.6549 7.00101H13.75C12.867 7.00101 12.066 6.48401 11.701 5.68001C11.336 4.87601 11.475 3.93301 12.057 3.26901L12.394 2.88401Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9.5 13.0006C10.0523 13.0006 10.5 12.5526 10.5 12.0006C10.5 11.4486 10.0523 11.0006 9.5 11.0006C8.9477 11.0006 8.5 11.4486 8.5 12.0006C8.5 12.5526 8.9477 13.0006 9.5 13.0006Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.98502 8.00061C6.85902 8.11961 6.43103 8.49661 5.75703 8.55961C5.12103 8.61961 4.65202 8.36461 4.49902 8.27361"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.015 8.00061C10.141 8.11961 10.569 8.49661 11.243 8.55961C11.879 8.61961 12.348 8.36461 12.501 8.27361"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 0.75061H17.25L13.75 4.75061H17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.1705 2.27451C10.3432 1.94321 9.4458 1.75061 8.5 1.75061C4.496 1.75061 1.25 4.99671 1.25 9.00061C1.25 13.0045 4.496 16.2506 8.5 16.2506C12.504 16.2506 15.75 13.0045 15.75 9.00061C15.75 8.57241 15.6971 8.15811 15.6232 7.75061"
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

export default FaceSleeping;
