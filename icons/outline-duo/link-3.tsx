import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Link3({
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
          d="M6 8.75C6 7.64543 6.89543 6.75 8 6.75H14.25C15.3546 6.75 16.25 7.64543 16.25 8.75V12.75C16.25 13.8546 15.3546 14.75 14.25 14.75H8C6.89543 14.75 6 13.8546 6 12.75V8.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.75 9.25C11.75 10.355 10.855 11.25 9.75 11.25H3.75C2.645 11.25 1.75 10.355 1.75 9.25V5.25C1.75 4.145 2.645 3.25 3.75 3.25H9.75C10.503 3.25 11.159 3.666 11.5 4.282"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 8.75C6.25 7.645 7.145 6.75 8.25 6.75H14.25C15.355 6.75 16.25 7.645 16.25 8.75V12.75C16.25 13.855 15.355 14.75 14.25 14.75H8.25C7.497 14.75 6.841 14.334 6.5 13.718"
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

export default Link3;
