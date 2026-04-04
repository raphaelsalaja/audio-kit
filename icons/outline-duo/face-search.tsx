import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSearch({
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
          d="M9.62833 1.9286C9.54447 2.27197 9.5 2.6308 9.5 3C9.5 5.48528 11.5147 7.5 14 7.5C14.4031 7.5 14.7938 7.447 15.1656 7.34758L15.659 7.84099C15.9036 8.08562 16.1906 8.26214 16.4963 8.37055C16.438 8.57709 16.25 8.7942 16.25 9C16.25 13.0041 13.0041 16.25 9 16.25C4.99594 16.25 1.75 13.0041 1.75 9C1.75 4.99594 4.99594 1.75 9 1.75C9.05226 1.75 9.11467 1.74226 9.17959 1.73421C9.39893 1.707 9.64686 1.67625 9.62833 1.9286Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 11.758C10.778 12.504 9.946 13 9 13C8.054 13 7.222 12.504 6.75 11.758"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14 5.25C15.2426 5.25 16.25 4.24264 16.25 3C16.25 1.75736 15.2426 0.75 14 0.75C12.7574 0.75 11.75 1.75736 11.75 3C11.75 4.24264 12.7574 5.25 14 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.59 4.59L17.25 6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.9014 1.7507C4.9433 1.804 1.75101 5.0293 1.75101 9C1.75101 13.004 4.99701 16.25 9.00101 16.25C12.9787 16.25 16.2083 13.0465 16.2506 9.0789"
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

export default FaceSearch;
