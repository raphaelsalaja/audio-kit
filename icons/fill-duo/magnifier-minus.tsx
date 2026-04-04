import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierMinus({
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
          d="M1.5 7.75C1.5 4.29829 4.29829 1.5 7.75 1.5C11.2017 1.5 14 4.29829 14 7.75C14 11.2017 11.2017 14 7.75 14C4.29829 14 1.5 11.2017 1.5 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.6073 12.668L15.2197 16.2803C15.5126 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L12.668 11.6073C12.3581 12.0018 12.0018 12.3581 11.6073 12.668Z"
          fill={fill}
        />
        <path
          d="M4.5 7.75C4.5 7.33579 4.83579 7 5.25 7H10.25C10.6642 7 11 7.33579 11 7.75C11 8.16421 10.6642 8.5 10.25 8.5H5.25C4.83579 8.5 4.5 8.16421 4.5 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MagnifierMinus;
