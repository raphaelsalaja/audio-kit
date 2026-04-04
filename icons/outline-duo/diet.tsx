import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Diet({
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
          d="M16.408 11.124C15.496 10.4 14.47 10.996 13.603 10.996C12.736 10.996 11.814 10.364 10.798 11.124C9.78199 11.884 9.68399 13.802 10.812 15.581C11.895 17.289 12.987 16.619 13.604 16.619C14.221 16.619 15.313 17.29 16.396 15.581C17.523 13.802 17.247 11.787 16.408 11.124Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.25 16.25H3.75C2.645 16.25 1.75 15.355 1.75 14.25V3.75C1.75 2.645 2.645 1.75 3.75 1.75H12.25C13.355 1.75 14.25 2.645 14.25 3.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 5.25H5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 5.25H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 8.25H5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 11.25H5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 8.25H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.408 11.124C15.496 10.4 14.47 10.996 13.603 10.996C12.736 10.996 11.814 10.364 10.798 11.124C9.78199 11.884 9.68399 13.802 10.812 15.581C11.895 17.289 12.987 16.619 13.604 16.619C14.221 16.619 15.313 17.29 16.396 15.581C17.523 13.802 17.247 11.787 16.408 11.124Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.167 7.5C15.351 7.5 15.5 7.649 15.5 7.833C15.5 8.753 14.753 9.5 13.833 9.5C13.649 9.5 13.5 9.351 13.5 9.167C13.5 8.247 14.247 7.5 15.167 7.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Diet;
