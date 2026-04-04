import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pos({
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
          d="M5.75 14.25H5.25C4.145 14.25 3.25 13.355 3.25 12.25V2.75C3.25 1.645 4.145 0.75 5.25 0.75H12.75C13.855 0.75 14.75 1.645 14.75 2.75V12.25C14.75 13.355 13.855 14.25 12.75 14.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 3.75H6.25V5.75H11.75V3.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 9.5C6.9142 9.5 7.25 9.164 7.25 8.75C7.25 8.336 6.9142 8 6.5 8C6.0858 8 5.75 8.336 5.75 8.75C5.75 9.164 6.0858 9.5 6.5 9.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 9.5C9.4142 9.5 9.75 9.164 9.75 8.75C9.75 8.336 9.4142 8 9 8C8.5858 8 8.25 8.336 8.25 8.75C8.25 9.164 8.5858 9.5 9 9.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.5 9.5C11.9142 9.5 12.25 9.164 12.25 8.75C12.25 8.336 11.9142 8 11.5 8C11.0858 8 10.75 8.336 10.75 8.75C10.75 9.164 11.0858 9.5 11.5 9.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.25 17.25H6.75C6.198 17.25 5.75 16.802 5.75 16.25V11.75H12.25V16.25C12.25 16.802 11.802 17.25 11.25 17.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 11.75V17.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Pos;
