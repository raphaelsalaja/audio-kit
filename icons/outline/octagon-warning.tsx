import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OctagonWarning({
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
          d="M10.968 2.25H7.03296C6.50296 2.25 5.99396 2.461 5.61896 2.836L2.83698 5.61798C2.46198 5.99298 2.25098 6.50198 2.25098 7.03198V10.967C2.25098 11.497 2.46198 12.006 2.83698 12.381L5.61896 15.163C5.99396 15.538 6.50296 15.749 7.03296 15.749H10.968C11.498 15.749 12.007 15.538 12.382 15.163L15.164 12.381C15.539 12.006 15.75 11.497 15.75 10.967V7.03198C15.75 6.50198 15.539 5.99298 15.164 5.61798L12.382 2.836C12.007 2.461 11.498 2.25 10.968 2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.43103V9.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.417C8.448 13.417 8 12.968 8 12.417C8 11.866 8.448 11.417 9 11.417C9.552 11.417 10 11.866 10 12.417C10 12.968 9.552 13.417 9 13.417Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default OctagonWarning;
