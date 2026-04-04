import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartHands({
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
          d="M16.293 4.989L17.25 7.181L17.2493 7.18484L18.0041 9.33801L18.0041 15.9458L17.2651 15.9676C17.1928 15.1943 16.5814 13.5719 14.7147 13.253C14.4622 13.3118 14.2331 13.3277 13.9768 13.3455C13.3184 13.3912 12.4804 13.4493 10.606 14.28C9.99399 14.551 9.28399 14.208 9.06599 13.576C8.86199 12.985 9.15399 12.338 9.73499 12.109C10.859 11.666 12.887 10.572 13.54 9.196C14.289 7.619 13.585 6.394 13.148 5.845C12.985 5.64 12.744 5.517 12.484 5.489L11.25 5.357L10.652 5.914C10.226 6.274 9.58699 6.217 9.23099 5.787C8.93999 5.435 8.92299 4.93 9.19099 4.56L10.27 3.367C10.538 3.071 10.912 2.894 11.311 2.875L12.748 2.806C13.048 2.792 13.346 2.868 13.602 3.025L15.701 4.309C15.963 4.47 16.17 4.707 16.293 4.989Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M17.25 16C17.109 14.75 16.344 13.625 14.747 13.247"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 7.181L16.293 4.989C16.17 4.707 15.963 4.47 15.701 4.309L13.602 3.025C13.346 2.868 13.048 2.792 12.748 2.806L11.311 2.875C10.912 2.894 10.538 3.071 10.27 3.367L9.19099 4.56C8.92299 4.93 8.93999 5.435 9.23099 5.787C9.58699 6.217 10.226 6.274 10.652 5.914L11.25 5.357L12.484 5.489C12.744 5.517 12.985 5.64 13.148 5.845C13.585 6.394 14.289 7.619 13.54 9.196C12.887 10.572 10.859 11.666 9.73499 12.109C9.15399 12.338 8.86199 12.985 9.06599 13.576C9.28399 14.208 9.99399 14.551 10.606 14.28C14.345 12.623 13.96 14.04 16.252 12.498"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 16C0.891 14.75 1.656 13.625 3.253 13.247"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 7.181L1.707 4.989C1.83 4.707 2.037 4.47 2.299 4.309L4.398 3.025C4.654 2.868 4.952 2.792 5.252 2.806L6.689 2.875C7.088 2.894 7.462 3.071 7.73 3.367L8.809 4.56C9.077 4.93 9.06 5.435 8.769 5.787C8.413 6.217 7.774 6.274 7.348 5.914L6.75 5.357L5.516 5.489C5.256 5.517 5.015 5.64 4.852 5.845C4.415 6.394 3.711 7.619 4.46 9.196C5.113 10.572 7.141 11.666 8.265 12.109C8.846 12.338 9.138 12.985 8.934 13.576C8.716 14.208 8.006 14.551 7.394 14.28C3.655 12.623 4.04 14.04 1.748 12.498"
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

export default HeartHands;
