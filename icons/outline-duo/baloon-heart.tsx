import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BaloonHeart({
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
          d="M8.546 13.639C8.833 13.787 9.167 13.787 9.454 13.639C10.968 12.859 15.75 10.029 15.75 5.428C15.757 3.407 14.107 1.762 12.06 1.75C10.829 1.766 9.684 2.379 9 3.39C8.316 2.379 7.171 1.766 5.94 1.75C3.893 1.762 2.243 3.408 2.25 5.428C2.25 10.029 7.032 12.858 8.546 13.639Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.302 17.25C7.871 16.819 7.871 16.12 8.302 15.69L8.677 15.311C9.108 14.88 9.108 14.181 8.677 13.751"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.546 13.639C8.833 13.787 9.167 13.787 9.454 13.639C10.968 12.859 15.75 10.029 15.75 5.428C15.757 3.407 14.107 1.762 12.06 1.75C10.829 1.766 9.684 2.379 9 3.39C8.316 2.379 7.171 1.766 5.94 1.75C3.893 1.762 2.243 3.408 2.25 5.428C2.25 10.029 7.032 12.858 8.546 13.639Z"
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

export default BaloonHeart;
