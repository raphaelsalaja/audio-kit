import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileTree({
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
          d="M14.78 2.72L13.28 1.22C13.139 1.079 12.948 1 12.75 1H10.75C9.785 1 9 1.785 9 2.75V6.75C9 7.715 9.785 8.5 10.75 8.5H13.25C14.215 8.5 15 7.715 15 6.75V3.25C15 3.051 14.921 2.86 14.78 2.72ZM13.25 7H10.75C10.612 7 10.5 6.888 10.5 6.75V2.75C10.5 2.612 10.612 2.5 10.75 2.5H12V3.25C12 3.664 12.336 4 12.75 4H13.5V6.75C13.5 6.888 13.388 7 13.25 7Z"
          fill={fill}
        />
        <path
          d="M13.28 9.72C13.139 9.579 12.948 9.5 12.75 9.5H10.75C9.785 9.5 9 10.285 9 11.25V15.25C9 16.215 9.785 17 10.75 17H13.25C14.215 17 15 16.215 15 15.25V11.75C15 11.551 14.921 11.36 14.78 11.22L13.28 9.72ZM13.25 15.5H10.75C10.612 15.5 10.5 15.388 10.5 15.25V11.25C10.5 11.112 10.612 11 10.75 11H12V11.75C12 12.164 12.336 12.5 12.75 12.5H13.5V15.25C13.5 15.388 13.388 15.5 13.25 15.5Z"
          fill={fill}
        />
        <path
          d="M5.25 6H6.75C7.164 6 7.5 5.664 7.5 5.25C7.5 4.836 7.164 4.5 6.75 4.5H5.25C4.836 4.5 4.5 4.164 4.5 3.75V1.75C4.5 1.336 4.164 1 3.75 1C3.336 1 3 1.336 3 1.75V11.75C3 12.991 4.009 14 5.25 14H6.75C7.164 14 7.5 13.664 7.5 13.25C7.5 12.836 7.164 12.5 6.75 12.5H5.25C4.836 12.5 4.5 12.164 4.5 11.75V5.862C4.736 5.946 4.986 6 5.25 6Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default FileTree;
