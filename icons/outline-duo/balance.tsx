import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Balance({
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
          d="M8.83725 1.7518C7.58756 1.88819 5.3678 2.75843 5.3678 5.34663C5.3678 8.04826 7.72208 9.01313 9.015 9.01313C10.2179 9.04529 12.6236 9.82362 12.6236 12.6796C12.6236 15.2848 10.2179 16.2496 9.015 16.2496V16.25C9.01 16.25 9.005 16.25 9 16.25C4.99594 16.25 1.75 13.0041 1.75 9.00001C1.75 5.05034 4.90835 1.83834 8.83725 1.7518Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 16.25C11.002 16.25 12.625 14.627 12.625 12.625C12.625 10.623 11.002 9 9 9C6.998 9 5.375 7.377 5.375 5.375C5.375 3.373 6.998 1.75 9 1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
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

export default Balance;
