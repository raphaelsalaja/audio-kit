import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Backpack({
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
          d="M10.75 3.75H7.25C5.041 3.75 3.25 5.541 3.25 7.75V14.25C3.25 15.355 4.145 16.25 5.25 16.25H6.25V10.75C6.25 9.645 7.145 8.75 8.25 8.75H9.75C10.855 8.75 11.75 9.645 11.75 10.75V16.25H12.75C13.855 16.25 14.75 15.355 14.75 14.25V7.75C14.75 5.541 12.959 3.75 10.75 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 11.75H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 3.75V3C6.75 1.757 7.757 0.75 9 0.75C10.243 0.75 11.25 1.757 11.25 3V3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 3.75H10.75C12.959 3.75 14.75 5.541 14.75 7.75V14.25C14.75 15.355 13.855 16.25 12.75 16.25H5.25C4.145 16.25 3.25 15.355 3.25 14.25V7.75C3.25 5.541 5.041 3.75 7.25 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 16.25V10.75C6.25 9.645 7.145 8.75 8.25 8.75H9.75C10.855 8.75 11.75 9.645 11.75 10.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Backpack;
