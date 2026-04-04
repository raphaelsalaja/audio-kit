import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PresentationScreenCheck({
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
          d="M3.75 2C2.23079 2 1 3.23079 1 4.75V11.25C1 12.7692 2.23079 14 3.75 14H14.25C15.7692 14 17 12.7692 17 11.25V4.75C17 3.23079 15.7692 2 14.25 2H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.7094 14H7.29054L6.46147 16.4872C6.33049 16.8801 5.90575 17.0925 5.51279 16.9615C5.11983 16.8305 4.90746 16.4058 5.03845 16.0128L5.7094 14Z"
          fill={fill}
        />
        <path
          d="M10.7094 14H12.2905L12.9614 16.0128C13.0924 16.4058 12.8801 16.8305 12.4871 16.9615C12.0941 17.0925 11.6694 16.8801 11.5384 16.4872L10.7094 14Z"
          fill={fill}
        />
        <path
          d="M9.75 1.375C9.75 0.960786 9.41421 0.625 9 0.625C8.58579 0.625 8.25 0.960786 8.25 1.375V2H9.75V1.375Z"
          fill={fill}
        />
        <path
          d="M11.9548 5.15142C12.2854 5.40098 12.3511 5.87129 12.1015 6.20188L8.70455 10.7019C8.57657 10.8714 8.38269 10.9787 8.17106 10.9972C7.95944 11.0156 7.74992 10.9435 7.59454 10.7986L5.98553 9.2986C5.68255 9.01615 5.66591 8.54157 5.94836 8.23859C6.23081 7.93561 6.7054 7.91897 7.00837 8.20142L8.00872 9.134L10.9043 5.29814C11.1539 4.96755 11.6242 4.90186 11.9548 5.15142Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PresentationScreenCheck;
