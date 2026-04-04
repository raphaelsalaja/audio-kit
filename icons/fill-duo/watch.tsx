import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Watch({
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
          d="M3.5 6.75C3.5 5.23079 4.73079 4 6.25 4H11.75C13.2692 4 14.5 5.23079 14.5 6.75V11.25C14.5 12.7692 13.2692 14 11.75 14H6.25C4.73079 14 3.5 12.7692 3.5 11.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 6.25C9.41421 6.25 9.75 6.58579 9.75 7V8.58431L11.3975 9.614C11.7488 9.83353 11.8555 10.2962 11.636 10.6475C11.4165 10.9988 10.9538 11.1055 10.6025 10.886L8.6025 9.636C8.38321 9.49894 8.25 9.25859 8.25 9V7C8.25 6.58579 8.58579 6.25 9 6.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.59698 1C6.74247 1 6.01152 1.61893 5.87119 2.46259L5.60193 4.07674C5.80972 4.02658 6.02674 4 6.24998 4H11.75C11.9732 4 12.1902 4.02658 12.398 4.07674L12.1288 2.46259C11.9884 1.61765 11.2582 1 10.403 1H7.59698Z"
          fill={fill}
        />
        <path
          d="M5.60193 13.9233L5.87119 15.5374C6.01152 16.3811 6.74247 17 7.59698 17H10.403C11.2582 17 11.9885 16.3815 12.1289 15.5366L12.398 13.9233C12.1902 13.9734 11.9732 14 11.75 14H6.24998C6.02674 14 5.80972 13.9734 5.60193 13.9233Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Watch;
