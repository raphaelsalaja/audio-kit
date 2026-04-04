import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RulerPen2({
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
          d="M13.25 1C11.733 1 10.5 2.233 10.5 3.75V12.5C10.5 14.235 12.466 16.496 12.689 16.748C12.832 16.908 13.036 17 13.25 17C13.464 17 13.668 16.908 13.811 16.748C14.035 16.496 16 14.235 16 12.5V3.75C16 2.233 14.767 1 13.25 1ZM13.25 2.5C13.939 2.5 14.5 3.061 14.5 3.75V5H12V3.75C12 3.061 12.561 2.5 13.25 2.5Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 1.5C2.78379 1.5 2 2.28379 2 3.25V5.75V9V12.25V14.75C2 15.7162 2.78379 16.5 3.75 16.5H6.75C7.71621 16.5 8.5 15.7162 8.5 14.75V3.25C8.5 2.28379 7.71621 1.5 6.75 1.5H3.75ZM3.5 9.75H4.75C5.16421 9.75 5.5 9.41421 5.5 9C5.5 8.58579 5.16421 8.25 4.75 8.25H3.5V6.5H4.75C5.16421 6.5 5.5 6.16421 5.5 5.75C5.5 5.33579 5.16421 5 4.75 5H3.5V3.25C3.5 3.11221 3.61221 3 3.75 3H6.75C6.88779 3 7 3.11221 7 3.25V14.75C7 14.8878 6.88779 15 6.75 15H3.75C3.61221 15 3.5 14.8878 3.5 14.75V13H4.75C5.16421 13 5.5 12.6642 5.5 12.25C5.5 11.8358 5.16421 11.5 4.75 11.5H3.5V9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default RulerPen2;
