import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SunCloud({
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
          d="M12.0754 10.3744C12.4957 9.76943 12.742 9.03449 12.742 8.242C12.742 6.17535 11.0667 4.5 9 4.5C6.93335 4.5 5.258 6.17535 5.258 8.242C5.258 9.03471 5.50449 9.76985 5.925 10.375C6.59789 9.39464 7.72013 8.75 9 8.75C10.2798 8.75 11.4026 9.39405 12.0754 10.3744Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 1V2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.127 3.123L13.419 3.831"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.25H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.87299 3.123L4.58099 3.831"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 8.25H2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 11.25C13.337 11.25 12.953 11.36 12.61 11.537C12.183 9.935 10.736 8.75 9 8.75C7.264 8.75 5.818 9.936 5.39 11.537C5.047 11.36 4.663 11.25 4.25 11.25C2.869 11.25 1.75 12.369 1.75 13.75C1.75 15.131 2.869 16.25 4.25 16.25H13.75C15.131 16.25 16.25 15.131 16.25 13.75C16.25 12.369 15.131 11.25 13.75 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.585 12.499C11.824 12.086 12.179 11.747 12.605 11.527"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.258 8C5.387 6.046 7.013 4.5 9 4.5C10.987 4.5 12.613 6.045 12.742 8"
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

export default SunCloud;
