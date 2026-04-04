import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsExpandDiagonal4({
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
          d="M2.21951 3.28021L3.28021 2.21951L15.7804 14.7197L14.7197 15.7804L2.21951 3.28021Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.75 8C2.336 8 2 7.664 2 7.25V2.75C2 2.336 2.336 2 2.75 2H7.25C7.664 2 8 2.336 8 2.75C8 3.164 7.664 3.5 7.25 3.5H3.5V7.25C3.5 7.664 3.164 8 2.75 8Z"
          fill={fill}
        />
        <path
          d="M15.25 16H10.75C10.336 16 10 15.664 10 15.25C10 14.836 10.336 14.5 10.75 14.5H14.5V10.75C14.5 10.336 14.836 10 15.25 10C15.664 10 16 10.336 16 10.75V15.25C16 15.664 15.664 16 15.25 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsExpandDiagonal4;
