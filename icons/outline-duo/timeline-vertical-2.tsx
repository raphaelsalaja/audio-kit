import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TimelineVertical2({
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
          d="M3.75 1.75V7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 16.25V10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 2.75H8.75C8.198 2.75 7.75 3.2 7.75 3.75V6.25C7.75 6.8 8.198 7.25 8.75 7.25H14.25C14.802 7.25 15.25 6.8 15.25 6.25V3.75C15.25 3.2 14.802 2.75 14.25 2.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 10.75H8.75C8.198 10.75 7.75 11.2 7.75 11.75V14.25C7.75 14.8 8.198 15.25 8.75 15.25H14.25C14.802 15.25 15.25 14.8 15.25 14.25V11.75C15.25 11.2 14.802 10.75 14.25 10.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 2.75H8.75C8.198 2.75 7.75 3.2 7.75 3.75V6.25C7.75 6.8 8.198 7.25 8.75 7.25H14.25C14.802 7.25 15.25 6.8 15.25 6.25V3.75C15.25 3.2 14.802 2.75 14.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 10.75C4.716 10.75 5.5 9.97 5.5 9C5.5 8.03 4.716 7.25 3.75 7.25C2.784 7.25 2 8.03 2 9C2 9.97 2.784 10.75 3.75 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 10.75H8.75C8.198 10.75 7.75 11.2 7.75 11.75V14.25C7.75 14.8 8.198 15.25 8.75 15.25H14.25C14.802 15.25 15.25 14.8 15.25 14.25V11.75C15.25 11.2 14.802 10.75 14.25 10.75Z"
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

export default TimelineVertical2;
