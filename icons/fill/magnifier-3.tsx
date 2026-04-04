import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Magnifier3({
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
          d="M11.1083 11.1083C11.4012 10.8154 11.876 10.8154 12.1689 11.1083L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5126 16.5732 15.2197 16.2803L11.1083 12.1689C10.8154 11.876 10.8154 11.4012 11.1083 11.1083Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M7.75 1.5C4.29829 1.5 1.5 4.29829 1.5 7.75C1.5 11.2017 4.29829 14 7.75 14C11.2017 14 14 11.2017 14 7.75C14 4.29829 11.2017 1.5 7.75 1.5ZM7.75 4.5C7.33579 4.5 7 4.83579 7 5.25C7 5.66421 7.33579 6 7.75 6C8.71679 6 9.5 6.78321 9.5 7.75C9.5 8.16421 9.83579 8.5 10.25 8.5C10.6642 8.5 11 8.16421 11 7.75C11 5.95479 9.54521 4.5 7.75 4.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Magnifier3;
