import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Rainbow({
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
          d="M7 12.25C7 11.1454 7.89543 10.25 9 10.25C10.1046 10.25 11 11.1454 11 12.25V13.5H7V12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 4.75C4.85786 4.75 1.5 8.10786 1.5 12.25V13.5H4.25V12.25C4.25 9.62664 6.37665 7.5 9 7.5C11.6234 7.5 13.75 9.62665 13.75 12.25V13.5H16.5V12.25C16.5 8.10786 13.1421 4.75 9 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7 13.25V12.25C7 11.145 7.895 10.25 9 10.25C10.105 10.25 11 11.145 11 12.25V13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 13.25V12.25C4.25 9.627 6.377 7.5 9 7.5C11.623 7.5 13.75 9.627 13.75 12.25V13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.5 13.25V12.25C1.5 8.108 4.858 4.75 9 4.75C13.142 4.75 16.5 8.108 16.5 12.25V13.25"
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

export default Rainbow;
