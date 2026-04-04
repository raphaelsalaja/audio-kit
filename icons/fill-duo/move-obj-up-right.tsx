import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjUpRight({
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
          d="M7.25 9H3.75C2.7835 9 2 9.7835 2 10.75V14.25C2 15.2165 2.7835 16 3.75 16H7.25C8.2165 16 9 15.2165 9 14.25V10.75C9 9.7835 8.2165 9 7.25 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 2H10.74C10.326 2 9.99 2.336 9.99 2.75C9.99 3.164 10.326 3.5 10.74 3.5H13.44L9.71999 7.21997C9.42699 7.51297 9.42699 7.98801 9.71999 8.28101C9.86599 8.42701 10.058 8.50098 10.25 8.50098C10.442 8.50098 10.634 8.42801 10.78 8.28101L14.5 4.56097V7.26099C14.5 7.67499 14.836 8.01099 15.25 8.01099C15.664 8.01099 16 7.67499 16 7.26099V2.75C16 2.336 15.664 2 15.25 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoveObjUpRight;
