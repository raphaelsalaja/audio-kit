import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowToCornerTopRight({
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
          d="M13.25 2H3.75C3.336 2 3 2.336 3 2.75C3 3.164 3.336 3.5 3.75 3.5H13.25C13.939 3.5 14.5 4.061 14.5 4.75V14.25C14.5 14.664 14.836 15 15.25 15C15.664 15 16 14.664 16 14.25V4.75C16 3.233 14.767 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.25 7H4.73999C4.32599 7 3.98999 7.336 3.98999 7.75C3.98999 8.164 4.32599 8.5 4.73999 8.5H8.44L2.21999 14.72C1.92699 15.013 1.92699 15.488 2.21999 15.781C2.36599 15.927 2.55799 16.001 2.74999 16.001C2.94199 16.001 3.13399 15.928 3.27999 15.781L9.49999 9.561V13.261C9.49999 13.675 9.83599 14.011 10.25 14.011C10.664 14.011 11 13.675 11 13.261V7.75C11 7.336 10.664 7 10.25 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowToCornerTopRight;
