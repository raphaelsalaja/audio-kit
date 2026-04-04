import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClapperboardPlay({
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
          d="M1.75 4.75C1.75 3.64543 2.64543 2.75 3.75 2.75H14.25C15.3546 2.75 16.25 3.64543 16.25 4.75V6.75H1.75V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.798 10.47L8.42301 9.084C8.01401 8.845 7.50101 9.14 7.50101 9.614V12.385C7.50101 12.858 8.01501 13.153 8.42301 12.915L10.798 11.529C11.204 11.292 11.204 10.706 10.798 10.469V10.47Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 6.75V13.25C1.75 14.355 2.645 15.25 3.75 15.25H14.25C15.355 15.25 16.25 14.355 16.25 13.25V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 6.75V4.75C16.25 3.645 15.355 2.75 14.25 2.75H3.75C2.645 2.75 1.75 3.645 1.75 4.75V6.75H16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 6.75L10 2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 6.75L6.25 2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 6.75L13.75 2.75"
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

export default ClapperboardPlay;
