import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function YogaMat({
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
          d="M14.75 15.5H4.75C2.958 15.5 1.5 14.042 1.5 12.25C1.5 11.836 1.836 11.5 2.25 11.5C2.664 11.5 3 11.836 3 12.25C3 13.215 3.785 14 4.75 14H14.75C14.888 14 15 13.888 15 13.75V5.25C15 5.112 14.888 5 14.75 5H9.99536C9.58136 5 9.24536 4.664 9.24536 4.25C9.24536 3.836 9.58136 3.5 9.99536 3.5L14.75 3.5C15.715 3.5 16.5 4.285 16.5 5.25V13.75C16.5 14.715 15.715 15.5 14.75 15.5Z"
          fill={secondaryfill}
        />
        <path
          d="M4.75 1.5C2.958 1.5 1.5 2.958 1.5 4.75V12.25C1.5 12.664 1.836 13 2.25 13C2.664 13 3 12.664 3 12.25C3 11.285 3.785 10.5 4.75 10.5C5.715 10.5 6.5 11.285 6.5 12.25C6.5 12.664 6.836 13 7.25 13C7.664 13 8 12.664 8 12.25V4.75C8 2.958 6.542 1.5 4.75 1.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default YogaMat;
