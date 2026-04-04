import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circles5({
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
          d="M9 13.25C11.3472 13.25 13.25 11.3472 13.25 9C13.25 6.65279 11.3472 4.75 9 4.75C6.65279 4.75 4.75 6.65279 4.75 9C4.75 11.3472 6.65279 13.25 9 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 13.25C11.3472 13.25 13.25 11.3472 13.25 9C13.25 6.65279 11.3472 4.75 9 4.75C6.65279 4.75 4.75 6.65279 4.75 9C4.75 11.3472 6.65279 13.25 9 13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 4.5C3.94036 4.5 4.5 3.94036 4.5 3.25C4.5 2.55964 3.94036 2 3.25 2C2.55964 2 2 2.55964 2 3.25C2 3.94036 2.55964 4.5 3.25 4.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.75 4.5C15.4404 4.5 16 3.94036 16 3.25C16 2.55964 15.4404 2 14.75 2C14.0596 2 13.5 2.55964 13.5 3.25C13.5 3.94036 14.0596 4.5 14.75 4.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.25 16C3.94036 16 4.5 15.4404 4.5 14.75C4.5 14.0596 3.94036 13.5 3.25 13.5C2.55964 13.5 2 14.0596 2 14.75C2 15.4404 2.55964 16 3.25 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.75 16C15.4404 16 16 15.4404 16 14.75C16 14.0596 15.4404 13.5 14.75 13.5C14.0596 13.5 13.5 14.0596 13.5 14.75C13.5 15.4404 14.0596 16 14.75 16Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Circles5;
