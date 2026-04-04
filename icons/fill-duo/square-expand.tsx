import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareExpand({
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
          d="M7.5 13.5H5.25C4.836 13.5 4.5 13.164 4.5 12.75V10.5C4.5 10.086 4.836 9.75 5.25 9.75C5.664 9.75 6 10.086 6 10.5V12H7.5C7.914 12 8.25 12.336 8.25 12.75C8.25 13.164 7.914 13.5 7.5 13.5ZM7.5 6H6V7.5C6 7.914 5.664 8.25 5.25 8.25C4.836 8.25 4.5 7.914 4.5 7.5V5.25C4.5 4.836 4.836 4.5 5.25 4.5H7.5C7.914 4.5 8.25 4.836 8.25 5.25C8.25 5.664 7.914 6 7.5 6ZM13.5 12.75C13.5 13.164 13.164 13.5 12.75 13.5H10.5C10.086 13.5 9.75 13.164 9.75 12.75C9.75 12.336 10.086 12 10.5 12H12V10.5C12 10.086 12.336 9.75 12.75 9.75C13.164 9.75 13.5 10.086 13.5 10.5V12.75ZM13.5 7.5C13.5 7.914 13.164 8.25 12.75 8.25C12.336 8.25 12 7.914 12 7.5V6H10.5C10.086 6 9.75 5.664 9.75 5.25C9.75 4.836 10.086 4.5 10.5 4.5H12.75C13.164 4.5 13.5 4.836 13.5 5.25V7.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareExpand;
