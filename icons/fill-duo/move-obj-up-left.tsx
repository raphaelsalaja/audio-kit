import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjUpLeft({
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
          d="M14.25 9H10.75C9.7835 9 9 9.7835 9 10.75V14.25C9 15.2165 9.7835 16 10.75 16H14.25C15.2165 16 16 15.2165 16 14.25V10.75C16 9.7835 15.2165 9 14.25 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.561 3.5H7.261C7.675 3.5 8.011 3.164 8.011 2.75C8.011 2.336 7.675 2 7.261 2H2.75C2.336 2 2 2.336 2 2.75V7.26001C2 7.67401 2.336 8.01001 2.75 8.01001C3.164 8.01001 3.5 7.67401 3.5 7.26001V4.56L7.22 8.28003C7.366 8.42603 7.558 8.5 7.75 8.5C7.942 8.5 8.134 8.42703 8.28 8.28003C8.573 7.98703 8.573 7.51199 8.28 7.21899L4.56 3.49902L4.561 3.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoveObjUpLeft;
