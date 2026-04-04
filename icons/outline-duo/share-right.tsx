import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareRight({
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
          d="M14 13.33V5.92C14 4.85961 13.1404 4 12.08 4L4.67 4C3.60961 4 2.75 4.85961 2.75 5.92V13.33C2.75 14.3904 3.60961 15.25 4.67 15.25H12.08C13.1404 15.25 14 14.3904 14 13.33Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 10.75V13.25C14.25 14.355 13.355 15.25 12.25 15.25H4.75C3.645 15.25 2.75 14.355 2.75 13.25V5.75C2.75 4.645 3.645 3.75 4.75 3.75H8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 1.75L16.25 5L13 8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16 5H12.75C10.541 5 8.75 6.791 8.75 9"
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

export default ShareRight;
