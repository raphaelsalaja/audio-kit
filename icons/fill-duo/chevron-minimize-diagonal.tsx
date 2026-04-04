import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChevronMinimizeDiagonal({
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
          d="M7.75 9.5H3.25C2.836 9.5 2.5 9.836 2.5 10.25C2.5 10.664 2.836 11 3.25 11H7V14.75C7 15.164 7.336 15.5 7.75 15.5C8.164 15.5 8.5 15.164 8.5 14.75V10.25C8.5 9.836 8.164 9.5 7.75 9.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.75 7H11V3.25C11 2.836 10.664 2.5 10.25 2.5C9.836 2.5 9.5 2.836 9.5 3.25V7.75C9.5 8.164 9.836 8.5 10.25 8.5H14.75C15.164 8.5 15.5 8.164 15.5 7.75C15.5 7.336 15.164 7 14.75 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChevronMinimizeDiagonal;
