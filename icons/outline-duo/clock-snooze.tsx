import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClockSnooze({
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
          d="M9 1.74994C4.99594 1.74994 1.75 4.99588 1.75 8.99994C1.75 13.004 4.99594 16.2499 9 16.2499C13.0041 16.2499 16.25 13.004 16.25 8.99994C16.25 8.3062 16.3226 7.63529 16.1406 7.00001L13.5 6.99994C11.2458 6.8201 10.6457 3.98877 11.6816 2.45158C10.6618 1.8286 10.223 1.74994 9 1.74994Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 4.75V9L12.25 11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 0.75H17.25L13.75 4.75H17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.0596 2.0515C10.4063 1.8579 9.7161 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 13.0039 4.996 16.25 9 16.25C13.004 16.25 16.25 13.0039 16.25 9C16.25 8.5718 16.1971 8.1575 16.1232 7.75"
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

export default ClockSnooze;
