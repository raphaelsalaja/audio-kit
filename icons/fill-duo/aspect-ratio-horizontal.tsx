import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AspectRatioHorizontal({
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
          d="M14.25 2H3.75C2.233 2 1 3.233 1 4.75V13.25C1 14.767 2.233 16 3.75 16H14.25C15.767 16 17 14.767 17 13.25V4.75C17 3.233 15.767 2 14.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.25 6H5V8.25C5 8.664 4.664 9 4.25 9C3.836 9 3.5 8.664 3.5 8.25V5.25C3.5 4.836 3.836 4.5 4.25 4.5H7.25C7.664 4.5 8 4.836 8 5.25C8 5.664 7.664 6 7.25 6ZM14.5 12.75C14.5 13.164 14.164 13.5 13.75 13.5H10.75C10.336 13.5 10 13.164 10 12.75C10 12.336 10.336 12 10.75 12H13V9.75C13 9.336 13.336 9 13.75 9C14.164 9 14.5 9.336 14.5 9.75V12.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AspectRatioHorizontal;
