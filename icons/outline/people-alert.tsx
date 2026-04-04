import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PeopleAlert({
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
          d="M5 5.25C5.9665 5.25 6.75 4.4665 6.75 3.5C6.75 2.5335 5.9665 1.75 5 1.75C4.0335 1.75 3.25 2.5335 3.25 3.5C3.25 4.4665 4.0335 5.25 5 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.0542 7.9115C5.7215 7.8066 5.3673 7.75 5 7.75C3.067 7.75 1.5 9.317 1.5 11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 3.5C14.75 2.5335 13.9665 1.75 13 1.75C12.0335 1.75 11.25 2.5335 11.25 3.5C11.25 4.4665 12.0335 5.25 13 5.25C13.9665 5.25 14.75 4.4665 14.75 3.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.5 11.25C16.5 9.317 14.933 7.75 13 7.75C12.6327 7.75 12.2785 7.8065 11.9458 7.9115"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 16.25H11.933C12.721 16.25 13.2 15.381 12.778 14.715L9.84501 10.084C9.45201 9.464 8.54801 9.464 8.15501 10.084L5.22201 14.715C4.80001 15.381 5.27901 16.25 6.06701 16.25H6.50001"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.75V14.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 17.5C9.4142 17.5 9.75 17.1642 9.75 16.75C9.75 16.3358 9.4142 16 9 16C8.5858 16 8.25 16.3358 8.25 16.75C8.25 17.1642 8.5858 17.5 9 17.5Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default PeopleAlert;
