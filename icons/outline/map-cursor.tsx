import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapCursor({
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
          d="M16.25 9.446V4.99699C16.25 4.35689 15.658 3.882 15.033 4.0209L12.035 4.6869C11.849 4.7279 11.655 4.716 11.476 4.6508L6.524 2.85001C6.345 2.78481 6.151 2.7719 5.965 2.8139L2.533 3.5768C2.075 3.6789 1.75 4.0849 1.75 4.5529V13.0029C1.75 13.643 2.342 14.1179 2.967 13.979L5.965 13.313C6.151 13.272 6.345 13.2839 6.524 13.3491L8.6699 14.1294"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.126 10.768L17.066 12.938C17.316 13.029 17.309 13.386 17.055 13.467L14.336 14.337L13.466 17.056C13.385 17.31 13.028 17.317 12.937 17.067L10.767 11.127C10.685 10.904 10.902 10.687 11.126 10.768Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MapCursor;
