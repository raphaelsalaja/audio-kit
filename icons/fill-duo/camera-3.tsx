import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Camera3({
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
          d="M2 4.75C2 3.23119 3.23119 2 4.75 2H13.25C14.7688 2 16 3.23119 16 4.75V13.25C16 14.7688 14.7688 16 13.25 16H4.75C3.23119 16 2 14.7688 2 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.5 9C5.5 7.06699 7.06699 5.5 9 5.5C10.933 5.5 12.5 7.06699 12.5 9C12.5 10.933 10.933 12.5 9 12.5C7.06699 12.5 5.5 10.933 5.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.25 6C5.6642 6 6 5.6642 6 5.25C6 4.8358 5.6642 4.5 5.25 4.5C4.8358 4.5 4.5 4.8358 4.5 5.25C4.5 5.6642 4.8358 6 5.25 6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Camera3;
