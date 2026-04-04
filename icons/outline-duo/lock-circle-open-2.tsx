import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockCircleOpen2({
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
          d="M9.5 16.25C12.1234 16.25 14.25 14.1234 14.25 11.5C14.25 8.87665 12.1234 6.75 9.5 6.75C6.87665 6.75 4.75 8.87665 4.75 11.5C4.75 14.1234 6.87665 16.25 9.5 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 7.628V4.5C6.75 2.981 5.519 1.75 4 1.75C2.481 1.75 1.25 2.981 1.25 4.5V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5 11V12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5 16.25C12.1234 16.25 14.25 14.1234 14.25 11.5C14.25 8.87665 12.1234 6.75 9.5 6.75C6.87665 6.75 4.75 8.87665 4.75 11.5C4.75 14.1234 6.87665 16.25 9.5 16.25Z"
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

export default LockCircleOpen2;
