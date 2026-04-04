import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tablet({
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
          d="M2 3.75C2 2.23069 3.23128 1 4.75 1H13.25C14.7687 1 16 2.23069 16 3.75V14.25C16 15.7693 14.7687 17 13.25 17H4.75C3.23128 17 2 15.7693 2 14.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7 3.25C7 2.83579 7.33579 2.5 7.75 2.5H10.25C10.6642 2.5 11 2.83579 11 3.25C11 3.66421 10.6642 4 10.25 4H7.75C7.33579 4 7 3.66421 7 3.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Tablet;
