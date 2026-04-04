import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenInNewWindow({
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
          d="M2.25 3.75V13.75C2.25 14.855 3.145 15.75 4.25 15.75H14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 4.5V4.25C5.25 3.145 6.145 2.25 7.25 2.25H13.75C14.855 2.25 15.75 3.145 15.75 4.25V10.75C15.75 11.855 14.855 12.75 13.75 12.75H7.25C6.145 12.75 5.25 11.855 5.25 10.75V4.5Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 4.5V4.25C5.25 3.145 6.145 2.25 7.25 2.25H13.75C14.855 2.25 15.75 3.145 15.75 4.25V10.75C15.75 11.855 14.855 12.75 13.75 12.75H7.25C6.145 12.75 5.25 11.855 5.25 10.75V10.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 5L11.75 7.5L9.25 10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 7.5H5.25"
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

export default OpenInNewWindow;
