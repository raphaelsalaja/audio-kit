import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Camera2({
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
          d="M3.75 3.75H14.25C15.3546 3.75 16.25 4.64543 16.25 5.75V12.25C16.25 13.3546 15.3546 14.25 14.25 14.25H3.75C2.64543 14.25 1.75 13.3546 1.75 12.25V5.75C1.75 4.64543 2.64543 3.75 3.75 3.75ZM12.75 9C12.75 10.5188 11.5188 11.75 10 11.75C8.48122 11.75 7.25 10.5188 7.25 9C7.25 7.48122 8.48122 6.25 10 6.25C11.5188 6.25 12.75 7.48122 12.75 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10 11.75C11.5188 11.75 12.75 10.5188 12.75 9C12.75 7.48122 11.5188 6.25 10 6.25C8.48122 6.25 7.25 7.48122 7.25 9C7.25 10.5188 8.48122 11.75 10 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 3.75H3.75C2.64543 3.75 1.75 4.64543 1.75 5.75V12.25C1.75 13.3546 2.64543 14.25 3.75 14.25H14.25C15.3546 14.25 16.25 13.3546 16.25 12.25V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 7C4.66421 7 5 6.66421 5 6.25C5 5.83579 4.66421 5.5 4.25 5.5C3.83579 5.5 3.5 5.83579 3.5 6.25C3.5 6.66421 3.83579 7 4.25 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.25 1.25H6.75"
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

export default Camera2;
