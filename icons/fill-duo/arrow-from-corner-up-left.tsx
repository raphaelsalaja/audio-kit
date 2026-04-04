import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowFromCornerUpLeft({
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
          d="M15.25 3C14.836 3 14.5 3.336 14.5 3.75V13.25C14.5 13.939 13.939 14.5 13.25 14.5H3.75C3.336 14.5 3 14.836 3 15.25C3 15.664 3.336 16 3.75 16H13.25C14.767 16 16 14.767 16 13.25V3.75C16 3.336 15.664 3 15.25 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.5 8.25999V4.56L9.72 10.78C9.866 10.926 10.058 11 10.25 11C10.442 11 10.634 10.927 10.78 10.78C11.073 10.487 11.073 10.012 10.78 9.71899L4.561 3.5H8.261C8.675 3.5 9.011 3.164 9.011 2.75C9.011 2.336 8.675 2 8.261 2H2.75C2.336 2 2 2.336 2 2.75V8.25999C2 8.67399 2.336 9.00999 2.75 9.00999C3.164 9.00999 3.5 8.67399 3.5 8.25999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowFromCornerUpLeft;
