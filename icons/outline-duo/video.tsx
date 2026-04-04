import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Video({
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
          d="M10.25 3.75H3.75C2.64543 3.75 1.75 4.64543 1.75 5.75V12.25C1.75 13.3546 2.64543 14.25 3.75 14.25H10.25C11.3546 14.25 12.25 13.3546 12.25 12.25V5.75C12.25 4.64543 11.3546 3.75 10.25 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.25 8L16.509 5.658C16.842 5.475 17.25 5.716 17.25 6.096V11.905C17.25 12.285 16.842 12.526 16.509 12.343L12.25 10.001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 3.75H3.75C2.64543 3.75 1.75 4.64543 1.75 5.75V12.25C1.75 13.3546 2.64543 14.25 3.75 14.25H10.25C11.3546 14.25 12.25 13.3546 12.25 12.25V5.75C12.25 4.64543 11.3546 3.75 10.25 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 7.5C5.16421 7.5 5.5 7.16421 5.5 6.75C5.5 6.33579 5.16421 6 4.75 6C4.33579 6 4 6.33579 4 6.75C4 7.16421 4.33579 7.5 4.75 7.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Video;
