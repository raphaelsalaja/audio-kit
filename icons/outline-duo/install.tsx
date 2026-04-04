import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Install({
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
          d="M14.25 2.75H3.75C2.6454 2.75 1.75 3.645 1.75 4.75V11.25C1.75 12.355 2.6454 13.25 3.75 13.25H14.25C15.3546 13.25 16.25 12.355 16.25 11.25V4.75C16.25 3.645 15.3546 2.75 14.25 2.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 15.75C6.508 15.511 7.628 15.25 9 15.25C9.795 15.25 10.941 15.338 12.25 15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.75V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 7.25L9 9.75L6.5 7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 2.75H3.75C2.6454 2.75 1.75 3.645 1.75 4.75V10.75C1.75 11.855 2.6454 12.75 3.75 12.75H14.25C15.3546 12.75 16.25 11.855 16.25 10.75V4.75C16.25 3.645 15.3546 2.75 14.25 2.75H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9.75V2.75"
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

export default Install;
