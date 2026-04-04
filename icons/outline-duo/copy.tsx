import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copy({
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
          d="M2.25 6.75V13.25C2.25 14.355 3.145 15.25 4.25 15.25H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 12.25H13.75C14.8546 12.25 15.75 11.355 15.75 10.25V4.75C15.75 3.645 14.8546 2.75 13.75 2.75H7.25C6.1454 2.75 5.25 3.645 5.25 4.75V10.25C5.25 11.355 6.1454 12.25 7.25 12.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 12.25H13.75C14.8546 12.25 15.75 11.355 15.75 10.25V4.75C15.75 3.645 14.8546 2.75 13.75 2.75H7.25C6.1454 2.75 5.25 3.645 5.25 4.75V10.25C5.25 11.355 6.1454 12.25 7.25 12.25Z"
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

export default Copy;
