import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Student({
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
          d="M9.20101 0.838997L14.73 3.272C14.929 3.36 14.929 3.642 14.73 3.73L9.20101 6.163C9.07301 6.219 8.92701 6.219 8.79801 6.163L3.27001 3.729C3.07101 3.641 3.07101 3.359 3.27001 3.271L8.79901 0.838997C8.92701 0.782997 9.07201 0.782997 9.20101 0.838997Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.879 3.5C14.879 3.5 14.562 6.13 15.5 7.989"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.953 16C4.251 14.042 6.475 12.75 9 12.75C11.525 12.75 13.749 14.041 15.047 16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.20101 0.838997L14.73 3.272C14.929 3.36 14.929 3.642 14.73 3.73L9.20101 6.163C9.07301 6.219 8.92701 6.219 8.79801 6.163L3.27001 3.729C3.07101 3.641 3.07101 3.359 3.27001 3.271L8.79901 0.838997C8.92701 0.782997 9.07201 0.782997 9.20101 0.838997Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.681 4.78999C5.415 5.30499 5.25 5.88099 5.25 6.49999C5.25 8.57099 6.929 10.25 9 10.25C11.071 10.25 12.75 8.57099 12.75 6.49999C12.75 5.87999 12.585 5.30499 12.319 4.78999"
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

export default Student;
