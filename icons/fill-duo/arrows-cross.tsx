import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsCross({
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
          d="M15.25 10C14.836 10 14.5 10.336 14.5 10.75V13.439L11.53 10.469C11.237 10.176 10.762 10.176 10.469 10.469C10.176 10.762 10.176 11.237 10.469 11.53L13.439 14.5H10.75C10.336 14.5 10 14.836 10 15.25C10 15.664 10.336 16 10.75 16H15.25C15.664 16 16 15.664 16 15.25V10.75C16 10.336 15.664 10 15.25 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.22 9.27999C8.366 9.42599 8.558 9.49999 8.75 9.49999C8.942 9.49999 9.134 9.42699 9.28 9.27999C9.573 8.98699 9.573 8.51199 9.28 8.21899L3.28 2.21999C2.987 1.92699 2.512 1.92699 2.219 2.21999C1.926 2.51299 1.926 2.988 2.219 3.281L8.22 9.27999Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 2H10.75C10.336 2 9.99999 2.336 9.99999 2.75C9.99999 3.164 10.336 3.5 10.75 3.5H13.439L2.21999 14.72C1.92699 15.013 1.92699 15.488 2.21999 15.781C2.36599 15.927 2.55799 16.001 2.74999 16.001C2.94199 16.001 3.13399 15.928 3.27999 15.781L14.5 4.561V7.25C14.5 7.664 14.836 8 15.25 8C15.664 8 16 7.664 16 7.25V2.75C16 2.336 15.664 2 15.25 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsCross;
