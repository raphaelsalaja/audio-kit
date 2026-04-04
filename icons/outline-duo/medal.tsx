import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Medal({
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
          d="M9 16.25C11.6234 16.25 13.75 14.1234 13.75 11.5C13.75 8.87665 11.6234 6.75 9 6.75C6.37665 6.75 4.25 8.87665 4.25 11.5C4.25 14.1234 6.37665 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.03301 8.917L1.20401 2.507C1.00401 2.174 1.24401 1.75 1.63301 1.75H4.71701C4.89301 1.75 5.05501 1.842 5.14601 1.993L8.05201 6.846"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.986 8.917L16.796 2.507C16.996 2.174 16.756 1.75 16.367 1.75H13.283C13.107 1.75 12.945 1.842 12.854 1.993L9.948 6.846"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C11.6234 16.25 13.75 14.1234 13.75 11.5C13.75 8.87665 11.6234 6.75 9 6.75C6.37665 6.75 4.25 8.87665 4.25 11.5C4.25 14.1234 6.37665 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.476 10.693C11.417 10.512 11.26 10.381 11.073 10.353L9.951 10.19L9.449 9.173C9.281 8.831 8.72 8.831 8.553 9.173L8.051 10.19L6.929 10.353C6.741 10.38 6.584 10.512 6.526 10.693C6.467 10.874 6.516 11.073 6.653 11.206L7.465 11.998L7.273 13.116C7.241 13.304 7.318 13.493 7.472 13.605C7.626 13.717 7.83 13.731 7.998 13.643L9.002 13.116L10.006 13.643C10.079 13.682 10.158 13.701 10.238 13.701C10.342 13.701 10.445 13.669 10.532 13.605C10.686 13.493 10.763 13.304 10.731 13.116L10.539 11.998L11.351 11.206C11.488 11.073 11.537 10.874 11.478 10.693H11.476Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Medal;
