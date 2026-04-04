import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldRightToLine({
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
          d="M7.543 13.426L13.098 9.40498C13.374 9.20498 13.374 8.79498 13.098 8.59498L7.543 4.57398C7.212 4.33498 6.75 4.57098 6.75 4.97898V7.24998H2.75C2.198 7.24998 1.75 7.69798 1.75 8.24998V9.74998C1.75 10.302 2.198 10.75 2.75 10.75H6.75V13.021C6.75 13.429 7.213 13.665 7.543 13.426Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.543 13.426L13.098 9.40498C13.374 9.20498 13.374 8.79498 13.098 8.59498L7.543 4.57398C7.212 4.33498 6.75 4.57098 6.75 4.97898V7.24998H2.75C2.198 7.24998 1.75 7.69798 1.75 8.24998V9.74998C1.75 10.302 2.198 10.75 2.75 10.75H6.75V13.021C6.75 13.429 7.213 13.665 7.543 13.426Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 14.25V3.75"
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

export default ArrowBoldRightToLine;
