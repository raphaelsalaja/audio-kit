import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowDownRight({
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
          d="M12.5 11.75C12.5 12.164 12.164 12.5 11.75 12.5H8.24999C7.83599 12.5 7.49999 12.164 7.49999 11.75C7.49999 11.336 7.83599 11 8.24999 11H9.93899L5.71999 6.78005C5.42699 6.48705 5.42699 6.01202 5.71999 5.71902C6.01299 5.42602 6.48799 5.42602 6.78099 5.71902L11.001 9.93899V8.25002C11.001 7.83602 11.337 7.50002 11.751 7.50002C12.165 7.50002 12.501 7.83602 12.501 8.25002L12.5 11.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowDownRight;
