import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceGrinClosedEyes({
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
          d="M11.897 10.757C11.743 10.603 11.531 10.536 11.314 10.568C9.78201 10.807 8.20201 10.806 6.67601 10.567C6.46201 10.535 6.25501 10.602 6.10401 10.752C5.95001 10.905 5.87701 11.128 5.91101 11.35C6.14101 12.861 7.46901 14.001 9.00001 14.001C10.531 14.001 11.86 12.86 12.089 11.347C12.122 11.131 12.05 10.911 11.897 10.758V10.757Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.75 8.25C4.75 7.56 5.31 7 6 7C6.69 7 7.25 7.56 7.25 8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 8.25C10.75 7.56 11.31 7 12 7C12.69 7 13.25 7.56 13.25 8.25"
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

export default FaceGrinClosedEyes;
