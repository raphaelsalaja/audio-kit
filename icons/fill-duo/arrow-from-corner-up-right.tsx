import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowFromCornerUpRight({
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
          d="M14.25 14.5H4.75C4.061 14.5 3.5 13.939 3.5 13.25V3.75C3.5 3.336 3.164 3 2.75 3C2.336 3 2 3.336 2 3.75V13.25C2 14.767 3.233 16 4.75 16H14.25C14.664 16 15 15.664 15 15.25C15 14.836 14.664 14.5 14.25 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 2H9.739C9.325 2 8.989 2.336 8.989 2.75C8.989 3.164 9.325 3.5 9.739 3.5H13.439L7.219 9.72C6.926 10.013 6.926 10.488 7.219 10.781C7.365 10.927 7.557 11.001 7.749 11.001C7.941 11.001 8.133 10.928 8.279 10.781L14.499 4.561V8.261C14.499 8.675 14.835 9.011 15.249 9.011C15.663 9.011 15.999 8.675 15.999 8.261V2.75C15.999 2.336 15.664 2 15.25 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowFromCornerUpRight;
