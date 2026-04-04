import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDownRight({
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
          d="M14 14.75C13.808 14.75 13.616 14.677 13.47 14.53L3.21999 4.28001C2.92699 3.98701 2.92699 3.51202 3.21999 3.21902C3.51299 2.92602 3.988 2.92602 4.281 3.21902L14.53 13.47C14.823 13.763 14.823 14.238 14.53 14.531C14.384 14.677 14.192 14.75 14 14.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.25 15H8.23901C7.82501 15 7.48901 14.664 7.48901 14.25C7.48901 13.836 7.82501 13.5 8.23901 13.5H13.5V8.23999C13.5 7.82599 13.836 7.48999 14.25 7.48999C14.664 7.48999 15 7.82599 15 8.23999V14.25C15 14.664 14.664 15 14.25 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDownRight;
