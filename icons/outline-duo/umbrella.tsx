import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Umbrella({
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
          d="M6.625 9C6.625 4.996 7.688 1.75 9 1.75C10.312 1.75 11.375 4.996 11.375 9C11.452 8.894 12.335 7.718 13.875 7.75C15.338 7.78 16.16 8.876 16.25 9C16.25 4.996 13.004 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.84 8.876 2.662 7.78 4.125 7.75C5.665 7.718 6.548 8.894 6.625 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 7.75C10.486 7.75 11.306 8.9 11.375 9C11.452 8.894 12.335 7.718 13.875 7.75C15.338 7.78 16.16 8.876 16.25 9C16.25 4.996 13.004 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.84 8.876 2.662 7.78 4.125 7.75C5.665 7.718 6.548 8.894 6.625 9C6.694 8.9 7.514 7.75 9 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.625 9C6.625 4.996 7.688 1.75 9 1.75C10.312 1.75 11.375 4.996 11.375 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 0.75V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 14.625C5.75 15.522 6.478 16.25 7.375 16.25C8.272 16.25 9 15.522 9 14.625V10.75"
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

export default Umbrella;
