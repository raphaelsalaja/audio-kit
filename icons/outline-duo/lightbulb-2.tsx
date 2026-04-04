import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Lightbulb2({
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
          d="M7.92204 1.86301C11.154 1.18801 14 3.637 14 6.75C14 8.701 12.88 10.387 11.25 11.211V11.25H6.75004V11.211C4.85904 10.255 3.65405 8.13999 4.08805 5.79599C4.44705 3.85599 5.99004 2.26601 7.92204 1.86301Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 11.25V8.25L7 6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.25L11 6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 6.75C14 3.637 11.154 1.18801 7.92204 1.86301C5.99004 2.26601 4.44705 3.85599 4.08805 5.79599C3.65405 8.13999 4.85904 10.255 6.75004 11.211V14.25C6.75004 15.355 7.64504 16.25 8.75004 16.25H9.25004C10.355 16.25 11.25 15.355 11.25 14.25V11.211C12.88 10.387 14 8.701 14 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 11.25H11.25"
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

export default Lightbulb2;
