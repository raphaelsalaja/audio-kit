import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowUp({
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
          d="M13.25 2H4.75C3.233 2 2 3.233 2 4.75V13.25C2 14.767 3.233 16 4.75 16H13.25C14.767 16 16 14.767 16 13.25V4.75C16 3.233 14.767 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.03 8.78005C11.884 8.92605 11.692 9.00002 11.5 9.00002C11.308 9.00002 11.116 8.92705 10.97 8.78005L9.74999 7.56008V12.249C9.74999 12.663 9.41399 12.999 8.99999 12.999C8.58599 12.999 8.24999 12.663 8.24999 12.249V7.56106L7.02999 8.78103C6.73699 9.07403 6.26199 9.07403 5.96899 8.78103C5.67599 8.48803 5.67599 8.01299 5.96899 7.71999L8.46899 5.21999C8.76199 4.92699 9.23699 4.92699 9.52999 5.21999L12.03 7.71999C12.323 8.01299 12.323 8.48705 12.03 8.78005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowUp;
