import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AspectRatioSquare({
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
          d="M13.25 2H4.75C3.233 2 2 3.233 2 4.75V13.25C2 14.767 3.233 16 4.75 16H13.25C14.767 16 16 14.767 16 13.25V4.75C16 3.233 14.767 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.25 6H6V8.25C6 8.664 5.664 9 5.25 9C4.836 9 4.5 8.664 4.5 8.25V5.25C4.5 4.836 4.836 4.5 5.25 4.5H8.25C8.664 4.5 9 4.836 9 5.25C9 5.664 8.664 6 8.25 6ZM13.5 12.75C13.5 13.164 13.164 13.5 12.75 13.5H9.75C9.336 13.5 9 13.164 9 12.75C9 12.336 9.336 12 9.75 12H12V9.75C12 9.336 12.336 9 12.75 9C13.164 9 13.5 9.336 13.5 9.75V12.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AspectRatioSquare;
