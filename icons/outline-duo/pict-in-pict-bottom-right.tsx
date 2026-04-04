import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PictInPictBottomRight({
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
          d="M7.25 15.25H4.75C3.645 15.25 2.75 14.355 2.75 13.25V4.75C2.75 3.645 3.645 2.75 4.75 2.75H13.25C14.355 2.75 15.25 3.645 15.25 4.75V7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 11.75V13.25C9.75 14.355 10.645 15.25 11.75 15.25H13.25C14.355 15.25 15.25 14.355 15.25 13.25V11.75C15.25 10.645 14.355 9.75 13.25 9.75H11.75C10.645 9.75 9.75 10.645 9.75 11.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9.75 11.75V13.25C9.75 14.355 10.645 15.25 11.75 15.25H13.25C14.355 15.25 15.25 14.355 15.25 13.25V11.75C15.25 10.645 14.355 9.75 13.25 9.75H11.75C10.645 9.75 9.75 10.645 9.75 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 8.25H8.25V5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 8.25L5.5 5.5"
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

export default PictInPictBottomRight;
