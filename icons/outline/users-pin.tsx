import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersPin({
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
          d="M14 13.5005C14.414 13.5005 14.75 13.1645 14.75 12.7505C14.75 12.3365 14.414 12.0005 14 12.0005C13.586 12.0005 13.25 12.3365 13.25 12.7505C13.25 13.1645 13.586 13.5005 14 13.5005Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M14 16.5005C14 16.5005 11.25 14.9915 11.25 12.7505C11.25 11.2315 12.481 10.0005 14 10.0005C15.519 10.0005 16.75 11.2315 16.75 12.7505C16.75 14.9915 14 16.5005 14 16.5005Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 7.0005C8.243 7.0005 9.25 5.9935 9.25 4.7505C9.25 3.5075 8.243 2.5005 7 2.5005C5.757 2.5005 4.75 3.5075 4.75 4.7505C4.75 5.9935 5.757 7.0005 7 7.0005Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7371 6.9756C11.824 6.9866 11.9101 7.0005 12 7.0005C13.243 7.0005 14.25 5.9934 14.25 4.7505C14.25 3.5076 13.243 2.5005 12 2.5005C11.91 2.5005 11.8239 2.51421 11.7369 2.52521"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.0143 9.8979C8.39 9.6472 7.7146 9.5004 7 9.5004C4.855 9.5004 3 10.7294 2.094 12.5204C1.694 13.3114 2.12201 14.2772 2.96001 14.5683C3.99101 14.9265 5.368 15.2514 7 15.2514C7.6298 15.2514 8.20731 15.1928 8.75571 15.1125"
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

export default UsersPin;
