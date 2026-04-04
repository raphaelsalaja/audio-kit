import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GoalFlag({
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
          d="M14.25 5.5C14.6642 5.5 15 5.83579 15 6.25V16.25C15 16.6642 14.6642 17 14.25 17H3.25C2.83579 17 2.5 16.6642 2.5 16.25V15.25C2.5 14.2838 3.28379 13.5 4.25 13.5H8V12.25C8 11.2838 8.78379 10.5 9.75 10.5H13.5V6.25C13.5 5.83579 13.8358 5.5 14.25 5.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M5.55105 1.47811C5.66317 1.18986 5.94074 1 6.25003 1H13.25C14.2162 1 15 1.78379 15 2.75V6.25C15 7.21621 14.2162 8 13.25 8H6.25003C5.94074 8 5.66317 7.81014 5.55105 7.52189C5.43892 7.23364 5.51524 6.90613 5.74324 6.69713L8.14011 4.5L5.74324 2.30287C5.51524 2.09387 5.43892 1.76636 5.55105 1.47811Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default GoalFlag;
