import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowFromCornerBottomLeft({
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
          d="M9.72 7.21998L3.5 13.439V9.73898C3.5 9.32498 3.164 8.98898 2.75 8.98898C2.336 8.98898 2 9.32498 2 9.73898V15.249C2 15.663 2.336 15.999 2.75 15.999H8.261C8.675 15.999 9.011 15.663 9.011 15.249C9.011 14.835 8.675 14.499 8.261 14.499H4.561L10.781 8.27898C11.074 7.98598 11.074 7.51098 10.781 7.21798C10.488 6.92498 10.013 6.92498 9.72 7.21798V7.21998Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowFromCornerBottomLeft;
