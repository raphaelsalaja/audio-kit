import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cyborg({
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
          d="M8.75 9.75C9.85457 9.75 10.75 8.85457 10.75 7.75C10.75 6.64543 9.85457 5.75 8.75 5.75C7.64543 5.75 6.75 6.64543 6.75 7.75C6.75 8.85457 7.64543 9.75 8.75 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75001 16.25V12.918C3.58401 11.661 2.267 9.108 2.91801 6.311C3.44501 4.046 5.18101 2.361 7.45701 1.885C11.336 1.075 14.75 4.014 14.75 7.75V9.5L16.5 12L14.746 12.851L14.463 14.503C14.34 15.223 13.715 15.75 12.984 15.75H10.749C9.644 15.75 8.749 14.855 8.749 13.75V9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 9.75C9.85457 9.75 10.75 8.85457 10.75 7.75C10.75 6.64543 9.85457 5.75 8.75 5.75C7.64543 5.75 6.75 6.64543 6.75 7.75C6.75 8.85457 7.64543 9.75 8.75 9.75Z"
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

export default Cyborg;
