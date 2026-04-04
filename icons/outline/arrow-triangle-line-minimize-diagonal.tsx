import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineMinimizeDiagonal({
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
          d="M7.25,14.896v-3.896c0-.138-.112-.25-.25-.25H3.104c-.223,0-.334,.269-.177,.427l3.896,3.896c.157,.157,.427,.046,.427-.177Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.896,7.25h-3.896c-.138,0-.25-.112-.25-.25V3.104c0-.223,.269-.334,.427-.177l3.896,3.896c.157,.157,.046,.427-.177,.427Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="4.875"
          x2="2.75"
          y1="13.125"
          y2="15.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.125"
          x2="15.25"
          y1="4.875"
          y2="2.75"
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineMinimizeDiagonal;
