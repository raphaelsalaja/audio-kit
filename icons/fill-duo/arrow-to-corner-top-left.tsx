import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowToCornerTopLeft({
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
          d="M15 2.75C15 2.336 14.664 2 14.25 2H4.75C3.233 2 2 3.233 2 4.75V14.25C2 14.664 2.336 15 2.75 15C3.164 15 3.5 14.664 3.5 14.25V4.75C3.5 4.061 4.061 3.5 4.75 3.5H14.25C14.664 3.5 15 3.164 15 2.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.561 8.5H13.261C13.675 8.5 14.011 8.164 14.011 7.75C14.011 7.336 13.675 7 13.261 7H7.75C7.336 7 7 7.336 7 7.75V13.26C7 13.674 7.336 14.01 7.75 14.01C8.164 14.01 8.5 13.674 8.5 13.26V9.56L14.72 15.78C14.866 15.926 15.058 16 15.25 16C15.442 16 15.634 15.927 15.78 15.78C16.073 15.487 16.073 15.012 15.78 14.719L9.56 8.49899L9.561 8.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowToCornerTopLeft;
