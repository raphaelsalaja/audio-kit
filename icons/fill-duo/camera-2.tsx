import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Camera2({
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
          d="M1 5.75C1 4.23128 2.23069 3 3.75 3H14.25C15.7693 3 17 4.23128 17 5.75V12.25C17 13.7687 15.7693 15 14.25 15H3.75C2.23069 15 1 13.7687 1 12.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 9C6.5 7.06702 8.06675 5.5 10 5.5C11.9332 5.5 13.5 7.06702 13.5 9C13.5 10.933 11.9332 12.5 10 12.5C8.06675 12.5 6.5 10.933 6.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.25 7C4.664 7 5 6.6642 5 6.25C5 5.8358 4.664 5.5 4.25 5.5C3.836 5.5 3.5 5.8358 3.5 6.25C3.5 6.6642 3.836 7 4.25 7Z"
          fill={fill}
        />
        <path
          d="M3.5 1.25C3.5 0.835786 3.83579 0.5 4.25 0.5H6.75C7.16421 0.5 7.5 0.835786 7.5 1.25C7.5 1.66421 7.16421 2 6.75 2H4.25C3.83579 2 3.5 1.66421 3.5 1.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Camera2;
