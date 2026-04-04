import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Laptop2({
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
          d="M17.25 12.25H0.75C0.75 13.9069 2.0931 15.25 3.75 15.25H14.25C15.9069 15.25 17.25 13.9069 17.25 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 12.25C3.145 12.25 2.25 11.355 2.25 10.25V4.75C2.25 3.645 3.145 2.75 4.25 2.75H13.75C14.855 2.75 15.75 3.645 15.75 4.75V10.25C15.75 11.355 14.855 12.25 13.75 12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 12.25H0.75C0.75 13.9069 2.0931 15.25 3.75 15.25H14.25C15.9069 15.25 17.25 13.9069 17.25 12.25Z"
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

export default Laptop2;
