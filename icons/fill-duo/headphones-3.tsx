import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Headphones3({
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
          d="M3.5 10.25C3.5 9.2835 4.2835 8.5 5.25 8.5V8.5C6.2165 8.5 7 9.2835 7 10.25V14.75C7 15.7165 6.2165 16.5 5.25 16.5V16.5C4.2835 16.5 3.5 15.7165 3.5 14.75V10.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 10.25C11 9.2835 11.7835 8.5 12.75 8.5V8.5C13.7165 8.5 14.5 9.2835 14.5 10.25V14.75C14.5 15.7165 13.7165 16.5 12.75 16.5V16.5C11.7835 16.5 11 15.7165 11 14.75V10.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 8.25C1 4.52179 4.02179 1.5 7.75 1.5H10.25C13.9782 1.5 17 4.52179 17 8.25V12.75C17 13.1642 16.6642 13.5 16.25 13.5C15.8358 13.5 15.5 13.1642 15.5 12.75V8.25C15.5 5.35021 13.1498 3 10.25 3H7.75C4.85021 3 2.5 5.35021 2.5 8.25V12.75C2.5 13.1642 2.16421 13.5 1.75 13.5C1.33579 13.5 1 13.1642 1 12.75V8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Headphones3;
