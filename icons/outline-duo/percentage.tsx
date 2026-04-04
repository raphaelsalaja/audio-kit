import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Percentage({
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
          d="M5 7.25C6.24264 7.25 7.25 6.24264 7.25 5C7.25 3.75736 6.24264 2.75 5 2.75C3.75736 2.75 2.75 3.75736 2.75 5C2.75 6.24264 3.75736 7.25 5 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13 15.25C14.2426 15.25 15.25 14.2426 15.25 13C15.25 11.7574 14.2426 10.75 13 10.75C11.7574 10.75 10.75 11.7574 10.75 13C10.75 14.2426 11.7574 15.25 13 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5 7.25C6.24264 7.25 7.25 6.24264 7.25 5C7.25 3.75736 6.24264 2.75 5 2.75C3.75736 2.75 2.75 3.75736 2.75 5C2.75 6.24264 3.75736 7.25 5 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 15.25C14.2426 15.25 15.25 14.2426 15.25 13C15.25 11.7574 14.2426 10.75 13 10.75C11.7574 10.75 10.75 11.7574 10.75 13C10.75 14.2426 11.7574 15.25 13 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 15.25L13.25 2.75"
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

export default Percentage;
