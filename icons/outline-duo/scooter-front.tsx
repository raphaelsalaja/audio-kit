import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScooterFront({
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
          d="M8 14.25H6.75C5.645 14.25 4.75 13.355 4.75 12.25V7.75C4.75 6.645 5.645 5.75 6.75 5.75H11.25C12.355 5.75 13.25 6.645 13.25 7.75V12.25C13.25 13.355 12.355 14.25 11.25 14.25H10"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8 14.25H6.75C5.645 14.25 4.75 13.355 4.75 12.25V7.75C4.75 6.645 5.645 5.75 6.75 5.75H11.25C12.355 5.75 13.25 6.645 13.25 7.75V12.25C13.25 13.355 12.355 14.25 11.25 14.25H10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.25C10.105 5.25 11 4.3546 11 3.25C11 2.1454 10.105 1.25 9 1.25C7.895 1.25 7 2.1454 7 3.25C7 4.3546 7.895 5.25 9 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 3.25H4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 3.25H13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.75C8.5858 10.75 8.25 11.0858 8.25 11.5V16C8.25 16.4142 8.5858 16.75 9 16.75C9.4142 16.75 9.75 16.4142 9.75 16V11.5C9.75 11.0858 9.4142 10.75 9 10.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ScooterFront;
