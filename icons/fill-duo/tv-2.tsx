import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tv2({
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
          d="M1 4.75C1 3.23079 2.23079 2 3.75 2H14.25C15.7692 2 17 3.23079 17 4.75V9.75C17 11.2692 15.7692 12.5 14.25 12.5H3.75C2.23079 12.5 1 11.2692 1 9.75V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.25 13.8984L8.25 12.5H9.75L9.75 13.8984L13.6627 14.7679C14.067 14.8577 14.322 15.2583 14.2321 15.6627C14.1423 16.067 13.7417 16.322 13.3373 16.2321L9 15.2683L4.6627 16.2321C4.25835 16.322 3.85772 16.067 3.76786 15.6627C3.678 15.2583 3.93295 14.8577 4.3373 14.7679L8.25 13.8984Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Tv2;
