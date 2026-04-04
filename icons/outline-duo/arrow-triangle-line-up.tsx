import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineUp({
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
          d="M9 7.75V15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.58602 2.453L5.52802 6.969C5.30302 7.301 5.54102 7.749 5.94202 7.749H12.057C12.458 7.749 12.696 7.301 12.471 6.969L9.41302 2.453C9.21502 2.16 8.78302 2.16 8.58502 2.453H8.58602Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.58602 2.453L5.52802 6.969C5.30302 7.301 5.54102 7.749 5.94202 7.749H12.057C12.458 7.749 12.696 7.301 12.471 6.969L9.41302 2.453C9.21502 2.16 8.78302 2.16 8.58502 2.453H8.58602Z"
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

export default ArrowTriangleLineUp;
