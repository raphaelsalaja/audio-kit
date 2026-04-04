import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AwardPlaque({
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
          d="M16.25 7.4917C15.778 7.3349 15.274 7.25 14.75 7.25C12.127 7.25 10 9.3766 10 12C10 12.8141 10.205 13.5803 10.566 14.25H3.75C2.645 14.25 1.75 13.355 1.75 12.25V5.25C1.75 4.145 2.645 3.25 3.75 3.25H14.25C15.355 3.25 16.25 4.145 16.25 5.25V7.4917Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 14.5C13.928 14.5 13.206 14.098 12.75 13.486V17.5C12.75 17.702 12.872 17.885 13.059 17.962C13.246 18.041 13.46 17.997 13.604 17.854L14.75 16.708L15.896 17.854C15.992 17.95 16.12 18 16.25 18C16.314 18 16.38 17.988 16.441 17.962C16.628 17.885 16.75 17.702 16.75 17.5V13.486C16.294 14.098 15.572 14.5 14.75 14.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.75 7.25H11"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 10.25H8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 14.5C16.131 14.5 17.25 13.3807 17.25 12C17.25 10.6193 16.131 9.5 14.75 9.5C13.369 9.5 12.25 10.6193 12.25 12C12.25 13.3807 13.369 14.5 14.75 14.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 6.7134V5.25C16.25 4.145 15.355 3.25 14.25 3.25H3.75C2.645 3.25 1.75 4.145 1.75 5.25V12.25C1.75 13.355 2.645 14.25 3.75 14.25H9.7533"
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

export default AwardPlaque;
