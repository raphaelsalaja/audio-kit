import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectArrowDownLeft({
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
          d="M14.25 2H3.75C2.233 2 1 3.233 1 4.75V13.25C1 14.767 2.233 16 3.75 16H14.25C15.767 16 17 14.767 17 13.25V4.75C17 3.233 15.767 2 14.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.27999 8.78005L6.05999 12H7.74899C8.16299 12 8.49899 12.336 8.49899 12.75C8.49899 13.164 8.16299 13.5 7.74899 13.5H4.24899C3.83499 13.5 3.49899 13.164 3.49899 12.75V9.25002C3.49899 8.83602 3.83499 8.50002 4.24899 8.50002C4.66299 8.50002 4.99899 8.83602 4.99899 9.25002V10.939L8.21899 7.71902C8.51199 7.42602 8.98699 7.42602 9.27999 7.71902C9.57299 8.01202 9.57299 8.48705 9.27999 8.78005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RectArrowDownLeft;
