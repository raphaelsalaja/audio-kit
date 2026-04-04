import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortObjTopToBottom({
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
          d="M14.75 10.75H12.75C11.9216 10.75 11.25 11.4216 11.25 12.25V14.25C11.25 15.0784 11.9216 15.75 12.75 15.75H14.75C15.5784 15.75 16.25 15.0784 16.25 14.25V12.25C16.25 11.4216 15.5784 10.75 14.75 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 10.75H12.75C11.9216 10.75 11.25 11.4216 11.25 12.25V14.25C11.25 15.0784 11.9216 15.75 12.75 15.75H14.75C15.5784 15.75 16.25 15.0784 16.25 14.25V12.25C16.25 11.4216 15.5784 10.75 14.75 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 2.25H12.75C11.9216 2.25 11.25 2.92157 11.25 3.75V5.75C11.25 6.57843 11.9216 7.25 12.75 7.25H14.75C15.5784 7.25 16.25 6.57843 16.25 5.75V3.75C16.25 2.92157 15.5784 2.25 14.75 2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 11.5L9 13.75L6.75 16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.75H6.5C3.877 13.75 1.75 11.623 1.75 9C1.75 6.377 3.877 4.25 6.5 4.25H8.25"
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

export default SortObjTopToBottom;
