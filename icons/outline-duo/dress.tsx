import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dress({
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
          d="M9 16.25C11.417 16.25 13.03 15.993 14.75 15.672C14.75 10.453 11.5 7.75 11.5 7.75C11.5 7.75 12.75 5.408 12.75 2.75C10.14 2.75 9 4.25 9 4.25C9 4.25 7.86 2.75 5.25 2.75C5.25 5.408 6.5 7.75 6.5 7.75C6.5 7.75 3.25 10.453 3.25 15.672C4.97 15.993 6.583 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 2.75V1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 7.75H11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 2.75V1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C11.417 16.25 13.03 15.993 14.75 15.672C14.75 10.453 11.5 7.75 11.5 7.75C11.5 7.75 12.75 5.408 12.75 2.75C10.14 2.75 9 4.25 9 4.25C9 4.25 7.86 2.75 5.25 2.75C5.25 5.408 6.5 7.75 6.5 7.75C6.5 7.75 3.25 10.453 3.25 15.672C4.97 15.993 6.583 16.25 9 16.25Z"
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

export default Dress;
