import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Slideshow({
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
          d="M14.25 2.75H3.75C2.64543 2.75 1.75 3.64543 1.75 4.75V10.75C1.75 11.8546 2.64543 12.75 3.75 12.75H14.25C15.3546 12.75 16.25 11.8546 16.25 10.75V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5 17C5.55228 17 6 16.5523 6 16C6 15.4477 5.55228 15 5 15C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13 17C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15C12.4477 15 12 15.4477 12 16C12 16.5523 12.4477 17 13 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 17.25C9.69036 17.25 10.25 16.6904 10.25 16C10.25 15.3096 9.69036 14.75 9 14.75C8.30964 14.75 7.75 15.3096 7.75 16C7.75 16.6904 8.30964 17.25 9 17.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.25 2.75H3.75C2.64543 2.75 1.75 3.64543 1.75 4.75V10.75C1.75 11.8546 2.64543 12.75 3.75 12.75H14.25C15.3546 12.75 16.25 11.8546 16.25 10.75V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75Z"
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

export default Slideshow;
