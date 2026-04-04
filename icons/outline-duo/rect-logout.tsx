import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectLogout({
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
          d="M6 5.75V4.25C6 3.145 6.895 2.25 8 2.25H13.75C14.855 2.25 15.75 3.145 15.75 4.25V13.75C15.75 14.855 14.855 15.75 13.75 15.75H8C6.895 15.75 6 14.855 6 13.75V12.25"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 5.75V4.25C6.25 3.145 7.145 2.25 8.25 2.25H13.75C14.855 2.25 15.75 3.145 15.75 4.25V13.75C15.75 14.855 14.855 15.75 13.75 15.75H8.25C7.145 15.75 6.25 14.855 6.25 13.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.5 11.75L0.75 9L3.5 6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 9H9.25"
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

export default RectLogout;
