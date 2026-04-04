import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label3({
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
          d="M4.75 3.75H12.523C12.825 3.75 13.11 3.886 13.3 4.121L17.25 9L13.3 13.879C13.11 14.114 12.825 14.25 12.523 14.25H4.75C3.645 14.25 2.75 13.355 2.75 12.25V5.75C2.75 4.645 3.645 3.75 4.75 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 3.75H12.523C12.825 3.75 13.11 3.886 13.3 4.121L17.25 9L13.3 13.879C13.11 14.114 12.825 14.25 12.523 14.25H4.75C3.645 14.25 2.75 13.355 2.75 12.25V5.75C2.75 4.645 3.645 3.75 4.75 3.75Z"
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

export default Label3;
