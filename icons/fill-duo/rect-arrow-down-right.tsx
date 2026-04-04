import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectArrowDownRight({
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
          d="M14.5 12.75C14.5 13.164 14.164 13.5 13.75 13.5H10.25C9.836 13.5 9.5 13.164 9.5 12.75C9.5 12.336 9.836 12 10.25 12H11.939L8.719 8.78005C8.426 8.48705 8.426 8.01202 8.719 7.71902C9.012 7.42602 9.487 7.42602 9.78 7.71902L13 10.939V9.25002C13 8.83602 13.336 8.50002 13.75 8.50002C14.164 8.50002 14.5 8.83602 14.5 9.25002V12.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RectArrowDownRight;
