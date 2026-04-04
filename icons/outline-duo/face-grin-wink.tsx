import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceGrinWink({
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
          d="M6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10 8.25001C10.138 8.14501 10.604 7.81801 11.281 7.82801C11.92 7.83801 12.358 8.14201 12.5 8.25001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.897 10.757C11.743 10.603 11.531 10.536 11.314 10.568C9.782 10.807 8.202 10.806 6.676 10.567C6.462 10.535 6.255 10.602 6.104 10.752C5.95 10.905 5.877 11.128 5.911 11.35C6.141 12.861 7.469 14.001 9 14.001C10.531 14.001 11.86 12.86 12.089 11.347C12.122 11.131 12.05 10.911 11.897 10.758V10.757Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FaceGrinWink;
