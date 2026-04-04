import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Upload4({
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
          d="M15.25 11C14.836 11 14.5 11.336 14.5 11.75V13.25C14.5 13.939 13.939 14.5 13.25 14.5H4.75C4.061 14.5 3.5 13.939 3.5 13.25V11.75C3.5 11.336 3.164 11 2.75 11C2.336 11 2 11.336 2 11.75V13.25C2 14.767 3.233 16 4.75 16H13.25C14.767 16 16 14.767 16 13.25V11.75C16 11.336 15.664 11 15.25 11Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.02999 6.78005L8.24999 4.56008V10.249C8.24999 10.663 8.58599 10.999 8.99999 10.999C9.41399 10.999 9.74999 10.663 9.74999 10.249V4.56106L11.97 6.78103C12.116 6.92703 12.308 7.001 12.5 7.001C12.692 7.001 12.884 6.92803 13.03 6.78103C13.323 6.48803 13.323 6.01299 13.03 5.71999L9.52999 2.21999C9.23699 1.92699 8.76199 1.92699 8.46899 2.21999L4.96899 5.71999C4.67599 6.01299 4.67599 6.48803 4.96899 6.78103C5.26199 7.07403 5.73699 7.07305 6.02999 6.78005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Upload4;
