import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align2Right({
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
          d="M15.25 1C15.6642 1 16 1.33579 16 1.75V16.25C16 16.6642 15.6642 17 15.25 17C14.8358 17 14.5 16.6642 14.5 16.25V1.75C14.5 1.33579 14.8358 1 15.25 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 7.75C2 6.78349 2.78349 6 3.75 6H11.25C12.2165 6 13 6.78349 13 7.75V10.25C13 11.2165 12.2165 12 11.25 12H3.75C2.78349 12 2 11.2165 2 10.25V7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Align2Right;
