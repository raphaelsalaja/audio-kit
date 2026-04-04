import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Newspaper2({
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
          d="M4 2.75C4 2.33579 4.33579 2 4.75 2H16.25C16.6642 2 17 2.33579 17 2.75V13.75C17 14.9922 15.9922 16 14.75 16H3.25C2.00779 16 1 14.9922 1 13.75V6C1 5.58579 1.33579 5.25 1.75 5.25H2.49768L2.49768 13.8116C2.49768 14.2258 2.83347 14.5616 3.24768 14.5616C3.66189 14.5616 3.99768 14.2258 3.99768 13.8116C3.99768 10.1038 4 6.44527 4 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7 7.25C7 6.83579 7.33579 6.5 7.75 6.5H13.25C13.6642 6.5 14 6.83579 14 7.25C14 7.66421 13.6642 8 13.25 8H7.75C7.33579 8 7 7.66421 7 7.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 10.25C7 9.83579 7.33579 9.5 7.75 9.5H13.25C13.6642 9.5 14 9.83579 14 10.25C14 10.6642 13.6642 11 13.25 11H7.75C7.33579 11 7 10.6642 7 10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Newspaper2;
