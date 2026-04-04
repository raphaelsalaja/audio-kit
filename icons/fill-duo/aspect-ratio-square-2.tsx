import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AspectRatioSquare2({
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
          d="M8.25 13.5H5.25C4.836 13.5 4.5 13.164 4.5 12.75V9.75C4.5 9.336 4.836 9 5.25 9C5.664 9 6 9.336 6 9.75V12H8.25C8.664 12 9 12.336 9 12.75C9 13.164 8.664 13.5 8.25 13.5ZM13.5 8.25C13.5 8.664 13.164 9 12.75 9C12.336 9 12 8.664 12 8.25V6H9.75C9.336 6 9 5.664 9 5.25C9 4.836 9.336 4.5 9.75 4.5H12.75C13.164 4.5 13.5 4.836 13.5 5.25V8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AspectRatioSquare2;
