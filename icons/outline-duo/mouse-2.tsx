import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mouse2({
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
          d="M9.75 1.75H8.25C6.04086 1.75 4.25 3.54086 4.25 5.75V12.25C4.25 14.4591 6.04086 16.25 8.25 16.25H9.75C11.9591 16.25 13.75 14.4591 13.75 12.25V5.75C13.75 3.54086 11.9591 1.75 9.75 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.75 1.75H8.25C6.04086 1.75 4.25 3.54086 4.25 5.75V12.25C4.25 14.4591 6.04086 16.25 8.25 16.25H9.75C11.9591 16.25 13.75 14.4591 13.75 12.25V5.75C13.75 3.54086 11.9591 1.75 9.75 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.25V7.75"
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

export default Mouse2;
