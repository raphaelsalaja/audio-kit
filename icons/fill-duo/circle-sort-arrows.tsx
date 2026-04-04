import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleSortArrows({
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
          d="M9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.151 10.991L9.456 12.969C9.216 13.249 8.784 13.249 8.545 12.969L6.85001 10.991C6.51601 10.602 6.79301 10 7.30601 10H10.696C11.209 10 11.484 10.602 11.151 10.991Z"
          fill={fill}
        />
        <path
          d="M10.695 7.99998H7.30499C6.79199 7.99998 6.51599 7.39795 6.84899 7.00895L8.544 5.03098C8.784 4.75098 9.21599 4.75098 9.45499 5.03098L11.15 7.00895C11.484 7.39795 11.207 7.99998 10.694 7.99998H10.695Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleSortArrows;
