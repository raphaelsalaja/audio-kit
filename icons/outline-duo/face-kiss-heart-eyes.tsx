import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceKissHeartEyes({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 13.875C10.44 13.875 11 13.315 11 12.625C11 11.935 10.44 11.375 9.75 11.375"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.709 10.445C5.826 10.518 5.976 10.518 6.093 10.445C6.668 10.087 8.333 8.91301 8.333 7.31201C8.336 6.59701 7.741 6.01401 7.003 6.01001C6.559 6.01601 6.147 6.23301 5.9 6.59001C5.653 6.23201 5.241 6.01501 4.797 6.01001C4.059 6.01401 3.465 6.59701 3.467 7.31201C3.467 8.91301 5.133 10.088 5.707 10.445H5.709Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.291 10.445C12.174 10.518 12.024 10.518 11.907 10.445C11.332 10.087 9.667 8.91301 9.667 7.31201C9.664 6.59701 10.259 6.01401 10.997 6.01001C11.441 6.01601 11.853 6.23301 12.1 6.59001C12.347 6.23201 12.759 6.01501 13.203 6.01001C13.941 6.01401 14.535 6.59701 14.533 7.31201C14.533 8.91301 12.867 10.088 12.293 10.445H12.291Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FaceKissHeartEyes;
