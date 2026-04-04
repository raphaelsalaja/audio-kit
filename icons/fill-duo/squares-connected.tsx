import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquaresConnected({
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
          d="M1.5 3.25C1.5 2.28691 2.28236 1.5 3.25 1.5H5.75C6.71764 1.5 7.5 2.28691 7.5 3.25V5.75C7.5 6.71309 6.71764 7.5 5.75 7.5H3.25C2.28236 7.5 1.5 6.71309 1.5 5.75V3.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.5 12.25C10.5 11.2869 11.2824 10.5 12.25 10.5H14.75C15.7176 10.5 16.5 11.2869 16.5 12.25V14.75C16.5 15.7131 15.7176 16.5 14.75 16.5H12.25C11.2824 16.5 10.5 15.7131 10.5 14.75V12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 4.25C9 3.83579 9.33579 3.5 9.75 3.5H11.75C13.268 3.5 14.5 4.72456 14.5 6.25V8.25C14.5 8.66421 14.1642 9 13.75 9C13.3358 9 13 8.66421 13 8.25V6.25C13 5.55544 12.442 5 11.75 5H9.75C9.33579 5 9 4.66421 9 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.25 9C4.66421 9 5 9.33579 5 9.75V11.75C5 12.4446 5.55799 13 6.25 13H8.25C8.66421 13 9 13.3358 9 13.75C9 14.1642 8.66421 14.5 8.25 14.5H6.25C4.73201 14.5 3.5 13.2754 3.5 11.75V9.75C3.5 9.33579 3.83579 9 4.25 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquaresConnected;
