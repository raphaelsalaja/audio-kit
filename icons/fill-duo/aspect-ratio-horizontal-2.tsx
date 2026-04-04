import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AspectRatioHorizontal2({
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
          d="M7.25 13.5H4.25C3.836 13.5 3.5 13.164 3.5 12.75V9.75C3.5 9.336 3.836 9 4.25 9C4.664 9 5 9.336 5 9.75V12H7.25C7.664 12 8 12.336 8 12.75C8 13.164 7.664 13.5 7.25 13.5ZM14.5 8.25C14.5 8.664 14.164 9 13.75 9C13.336 9 13 8.664 13 8.25V6H10.75C10.336 6 10 5.664 10 5.25C10 4.836 10.336 4.5 10.75 4.5H13.75C14.164 4.5 14.5 4.836 14.5 5.25V8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AspectRatioHorizontal2;
