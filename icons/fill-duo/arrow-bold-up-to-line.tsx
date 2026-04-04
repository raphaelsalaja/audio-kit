import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldUpToLine({
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
          d="M14.25 1H3.75C3.336 1 3 1.336 3 1.75C3 2.164 3.336 2.5 3.75 2.5H14.25C14.664 2.5 15 2.164 15 1.75C15 1.336 14.664 1 14.25 1Z"
          fill={fill}
        />
        <path
          d="M10.013 4.46097C9.54401 3.81397 8.45601 3.81297 7.98801 4.46097L3.96702 10.017C3.69002 10.4 3.652 10.898 3.866 11.319C4.081 11.739 4.50701 12 4.97901 12H6.50001V15.25C6.50001 16.215 7.28501 17 8.25001 17H9.75001C10.715 17 11.5 16.215 11.5 15.25V12H13.021C13.493 12 13.919 11.739 14.134 11.319C14.348 10.899 14.31 10.4 14.033 10.017L10.013 4.46097Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldUpToLine;
