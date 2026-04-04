import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTurnUp2({
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
          d="M7.75 16H3.75C3.336 16 3 15.664 3 15.25C3 14.836 3.336 14.5 3.75 14.5H7.75C8.439 14.5 9 13.939 9 13.25V3C9 2.586 9.336 2.25 9.75 2.25C10.164 2.25 10.5 2.586 10.5 3V13.25C10.5 14.767 9.267 16 7.75 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14 7.74999C13.808 7.74999 13.616 7.67699 13.47 7.52999L9.75 3.80999L6.03 7.52999C5.737 7.82299 5.262 7.82299 4.969 7.52999C4.676 7.23699 4.676 6.76199 4.969 6.46899L9.22 2.21999C9.513 1.92699 9.988 1.92699 10.281 2.21999L14.531 6.46999C14.824 6.76299 14.824 7.238 14.531 7.531C14.385 7.677 14.193 7.751 14.001 7.751L14 7.74999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTurnUp2;
