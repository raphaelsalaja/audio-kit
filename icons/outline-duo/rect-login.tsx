import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectLogin({
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
          d="M5 5.75V4.25C5 3.145 5.895 2.25 7 2.25H12.25C13.355 2.25 14.25 3.145 14.25 4.25V13.75C14.25 14.855 13.355 15.75 12.25 15.75H7C5.895 15.75 5 14.855 5 13.75V12.25"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 5.75V4.25C4.75 3.145 5.645 2.25 6.75 2.25H12.25C13.355 2.25 14.25 3.145 14.25 4.25V13.75C14.25 14.855 13.355 15.75 12.25 15.75H6.75C5.645 15.75 4.75 14.855 4.75 13.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.5 11.75L10.25 9L7.5 6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 9H1.75"
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

export default RectLogin;
