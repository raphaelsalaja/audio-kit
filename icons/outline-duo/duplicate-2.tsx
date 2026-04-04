import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Duplicate2({
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
          d="M4.25 12.75H10.75C11.855 12.75 12.75 11.855 12.75 10.75V4.25C12.75 3.145 11.855 2.25 10.75 2.25H4.25C3.145 2.25 2.25 3.145 2.25 4.25V10.75C2.25 11.855 3.145 12.75 4.25 12.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 12.75H10.75C11.855 12.75 12.75 11.855 12.75 10.75V4.25C12.75 3.145 11.855 2.25 10.75 2.25H4.25C3.145 2.25 2.25 3.145 2.25 4.25V10.75C2.25 11.855 3.145 12.75 4.25 12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.59875 15.25C5.99775 15.9385 6.78485 16.3516 7.61995 16.2271L14.544 15.198C15.636 15.0361 16.39 14.019 16.228 12.926L15.25 6.34521"
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

export default Duplicate2;
