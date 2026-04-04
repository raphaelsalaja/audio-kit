import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Newspaper({
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
          d="M7 5.75C7 5.33579 7.33579 5 7.75 5H13.25C13.6642 5 14 5.33579 14 5.75V9.25C14 9.66421 13.6642 10 13.25 10H7.75C7.33579 10 7 9.66421 7 9.25V5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 12.25C7 11.8358 7.33579 11.5 7.75 11.5H13.25C13.6642 11.5 14 11.8358 14 12.25C14 12.6642 13.6642 13 13.25 13H7.75C7.33579 13 7 12.6642 7 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Newspaper;
