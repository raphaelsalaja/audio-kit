import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleOpenArrowUp({
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
          d="M1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1C4.589 1 1 4.589 1 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.72 9.53005C12.013 9.82305 12.488 9.82305 12.781 9.53005C12.927 9.38405 13.001 9.19202 13.001 9.00002C13.001 8.80802 12.928 8.61599 12.781 8.46999L9.53099 5.21999C9.23799 4.92699 8.76299 4.92699 8.46999 5.21999L5.21999 8.46999C4.92699 8.76299 4.92699 9.23803 5.21999 9.53103C5.51299 9.82403 5.98799 9.82403 6.28099 9.53103L8.25099 7.561V16.25C8.25099 16.664 8.58699 17 9.00099 17C9.41499 17 9.75099 16.664 9.75099 16.25V7.561L11.721 9.53103L11.72 9.53005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleOpenArrowUp;
