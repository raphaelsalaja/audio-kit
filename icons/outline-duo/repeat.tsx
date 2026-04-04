import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Repeat({
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
          d="M2.25 6.25C2.25 5.14543 3.14543 4.25 4.25 4.25H13.75C14.8546 4.25 15.75 5.14543 15.75 6.25V12C15.75 13.1046 14.8546 14 13.75 14H4.25C3.14543 14 2.25 13.1046 2.25 12V6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5 13.75H4.25C3.145 13.75 2.25 12.855 2.25 11.75V6.25C2.25 5.145 3.145 4.25 4.25 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V11.75C15.75 12.855 14.855 13.75 13.75 13.75H8.008"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 11.25L8.008 13.742L10.5 16.235"
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

export default Repeat;
