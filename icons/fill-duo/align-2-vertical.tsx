import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align2Vertical({
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
          d="M6 4.75C6 3.78349 6.78349 3 7.75 3H10.25C11.2165 3 12 3.78349 12 4.75V13.25C12 14.2165 11.2165 15 10.25 15H7.75C6.78349 15 6 14.2165 6 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6 8.25H1.75C1.33579 8.25 1 8.58579 1 9C1 9.41421 1.33579 9.75 1.75 9.75H6V8.25Z"
          fill={fill}
        />
        <path
          d="M12 9.75H16.25C16.6642 9.75 17 9.41421 17 9C17 8.58579 16.6642 8.25 16.25 8.25H12V9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Align2Vertical;
