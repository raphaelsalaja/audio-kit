import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldDownToLine({
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
          d="M4.57401 7.543L8.59501 13.098C8.79501 13.374 9.20501 13.374 9.40501 13.098L13.426 7.543C13.665 7.212 13.429 6.75 13.021 6.75H10.75V2.75C10.75 2.198 10.302 1.75 9.75001 1.75H8.25001C7.69801 1.75 7.25001 2.198 7.25001 2.75V6.75H4.97901C4.57101 6.75 4.33501 7.213 4.57401 7.543Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.57401 7.543L8.59501 13.098C8.79501 13.374 9.20501 13.374 9.40501 13.098L13.426 7.543C13.665 7.212 13.429 6.75 13.021 6.75H10.75V2.75C10.75 2.198 10.302 1.75 9.75001 1.75H8.25001C7.69801 1.75 7.25001 2.198 7.25001 2.75V6.75H4.97901C4.57101 6.75 4.33501 7.213 4.57401 7.543Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 16.25H14.25"
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

export default ArrowBoldDownToLine;
