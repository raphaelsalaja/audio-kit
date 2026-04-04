import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScanCube({
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
          d="M8.398 4.999L5.848 6.478C5.478 6.693 5.25 7.088 5.25 7.516V10.484C5.25 10.912 5.478 11.307 5.848 11.522L8.398 13.001C8.77 13.217 9.23 13.217 9.602 13.001L12.152 11.522C12.522 11.307 12.75 10.912 12.75 10.484V7.516C12.75 7.088 12.522 6.693 12.152 6.478L9.602 4.999C9.23 4.783 8.77 4.783 8.398 4.999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.398 4.999L5.848 6.478C5.478 6.693 5.25 7.088 5.25 7.516V10.484C5.25 10.912 5.478 11.307 5.848 11.522L8.398 13.001C8.77 13.217 9.23 13.217 9.602 13.001L12.152 11.522C12.522 11.307 12.75 10.912 12.75 10.484V7.516C12.75 7.088 12.522 6.693 12.152 6.478L9.602 4.999C9.23 4.783 8.77 4.783 8.398 4.999Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.59 6.918L9 9L5.41 6.918"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.163V9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 11.75V13.75C15.75 14.855 14.855 15.75 13.75 15.75H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 15.75H4.25C3.145 15.75 2.25 14.855 2.25 13.75V11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 6.25V4.25C2.25 3.145 3.145 2.25 4.25 2.25H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 2.25H13.75C14.855 2.25 15.75 3.145 15.75 4.25V6.25"
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

export default ScanCube;
