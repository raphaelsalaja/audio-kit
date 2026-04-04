import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Vibrance({
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
          d="M1.62788 4.57618C1.00337 3.41088 1.84681 2 3.16998 2H14.83C16.1515 2 16.9969 3.41031 16.3721 4.57616L10.5545 15.436C10.5509 15.4434 10.5471 15.4507 10.5431 15.4581C9.88346 16.6899 8.11764 16.69 7.45788 15.4582M7.45788 15.4582L1.62788 4.57618L7.45788 15.4582Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 7.5C6.5 6.11979 7.61979 5 9 5C10.3802 5 11.5 6.11979 11.5 7.5C11.5 8.88021 10.3802 10 9 10C7.61979 10 6.5 8.88021 6.5 7.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Vibrance;
