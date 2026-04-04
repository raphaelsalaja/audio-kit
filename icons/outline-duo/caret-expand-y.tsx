import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretExpandY({
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
          d="M8.58598 3.001L6.23798 6.469C6.01298 6.801 6.25098 7.249 6.65198 7.249H11.348C11.749 7.249 11.987 6.801 11.762 6.469L9.41398 3.001C9.21598 2.708 8.78398 2.708 8.58598 3.001Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.58598 3.001L6.23798 6.469C6.01298 6.801 6.25098 7.249 6.65198 7.249H11.348C11.749 7.249 11.987 6.801 11.762 6.469L9.41398 3.001C9.21598 2.708 8.78398 2.708 8.58598 3.001Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.58598 14.999L6.23798 11.531C6.01298 11.199 6.25098 10.751 6.65198 10.751H11.348C11.749 10.751 11.987 11.199 11.762 11.531L9.41398 14.999C9.21598 15.292 8.78398 15.292 8.58598 14.999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.58598 14.999L6.23798 11.531C6.01298 11.199 6.25098 10.751 6.65198 10.751H11.348C11.749 10.751 11.987 11.199 11.762 11.531L9.41398 14.999C9.21598 15.292 8.78398 15.292 8.58598 14.999Z"
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

export default CaretExpandY;
