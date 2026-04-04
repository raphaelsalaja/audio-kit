import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Location4({
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
          d="M2 16.25C2 15.8358 2.33579 15.5 2.75 15.5H15.25C15.6642 15.5 16 15.8358 16 16.25C16 16.6642 15.6642 17 15.25 17H2.75C2.33579 17 2 16.6642 2 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 6.5C9.41421 6.5 9.75 6.83579 9.75 7.25V13.25C9.75 13.6642 9.41421 14 9 14C8.58579 14 8.25 13.6642 8.25 13.25V7.25C8.25 6.83579 8.58579 6.5 9 6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 5C5 2.79079 6.79079 1 9 1C11.2092 1 13 2.79079 13 5C13 7.20921 11.2092 9 9 9C6.79079 9 5 7.20921 5 5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Location4;
