import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Microphone3({
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
          d="M16 7.5C16 7.086 15.664 6.75 15.25 6.75C14.836 6.75 14.5 7.086 14.5 7.5C14.5 10.533 12.033 13 9 13C5.967 13 3.5 10.533 3.5 7.5C3.5 7.086 3.164 6.75 2.75 6.75C2.336 6.75 2 7.086 2 7.5C2 11.106 4.742 14.083 8.25 14.458V16.5H5.75C5.336 16.5 5 16.836 5 17.25C5 17.664 5.336 18 5.75 18H12.25C12.664 18 13 17.664 13 17.25C13 16.836 12.664 16.5 12.25 16.5H9.75V14.458C13.258 14.082 16 11.106 16 7.5Z"
          fill={secondaryfill}
        />
        <path
          d="M8.99979 0C6.79056 0 4.99979 1.7909 4.99979 4V7.5C4.99979 9.7091 6.79056 11.5 8.99979 11.5C11.209 11.5 12.9998 9.7091 12.9998 7.5V6.5H9.74979C9.33558 6.5 8.99979 6.16421 8.99979 5.75C8.99979 5.33579 9.33558 5 9.74979 5H12.9998V4C12.9998 1.7909 11.209 0 8.99979 0Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Microphone3;
