import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DeleteRight({
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
          d="M4.75 14.25H12.523C12.825 14.25 13.11 14.114 13.3 13.879L17.25 9L13.3 4.121C13.11 3.886 12.825 3.75 12.523 3.75H4.75C3.645 3.75 2.75 4.645 2.75 5.75V12.25C2.75 13.355 3.645 14.25 4.75 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 14.25H12.523C12.825 14.25 13.11 14.114 13.3 13.879L17.25 9L13.3 4.121C13.11 3.886 12.825 3.75 12.523 3.75H4.75C3.645 3.75 2.75 4.645 2.75 5.75V12.25C2.75 13.355 3.645 14.25 4.75 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 11.25L6.75 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 11.25L11.25 6.75"
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

export default DeleteRight;
