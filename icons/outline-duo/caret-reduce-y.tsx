import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretReduceY({
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
          d="M9.41398 7.49901L11.762 4.03101C11.987 3.69901 11.749 3.25101 11.348 3.25101H6.65198C6.25098 3.25101 6.01298 3.69901 6.23798 4.03101L8.58598 7.49901C8.78398 7.79201 9.21598 7.79201 9.41398 7.49901Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.41398 7.49901L11.762 4.03101C11.987 3.69901 11.749 3.25101 11.348 3.25101H6.65198C6.25098 3.25101 6.01298 3.69901 6.23798 4.03101L8.58598 7.49901C8.78398 7.79201 9.21598 7.79201 9.41398 7.49901Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.41398 10.501L11.762 13.969C11.987 14.301 11.749 14.749 11.348 14.749H6.65198C6.25098 14.749 6.01298 14.301 6.23798 13.969L8.58598 10.501C8.78398 10.208 9.21598 10.208 9.41398 10.501Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.41398 10.501L11.762 13.969C11.987 14.301 11.749 14.749 11.348 14.749H6.65198C6.25098 14.749 6.01298 14.301 6.23798 13.969L8.58598 10.501C8.78398 10.208 9.21598 10.208 9.41398 10.501Z"
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

export default CaretReduceY;
