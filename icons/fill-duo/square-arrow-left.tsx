import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowLeft({
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
          d="M12.25 9.75002H7.561L8.781 10.97C9.074 11.263 9.074 11.738 8.781 12.031C8.635 12.177 8.443 12.251 8.251 12.251C8.059 12.251 7.867 12.178 7.721 12.031L5.221 9.53103C4.928 9.23803 4.928 8.76299 5.221 8.46999L7.721 5.96999C8.014 5.67699 8.489 5.67699 8.782 5.96999C9.075 6.26299 9.075 6.73803 8.782 7.03103L7.562 8.251H12.251C12.665 8.251 13.001 8.587 13.001 9.001C13.001 9.415 12.665 9.751 12.251 9.751L12.25 9.75002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowLeft;
