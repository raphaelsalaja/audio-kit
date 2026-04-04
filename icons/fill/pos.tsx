import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pos({
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
          d="M5.25 0H12.75C14.267 0 15.5 1.233 15.5 2.75V12.25C15.5 13.767 14.267 15 12.75 15H12V12H6V15H5.25C3.733 15 2.5 13.767 2.5 12.25V2.75C2.5 1.233 3.733 0 5.25 0ZM5 9.25C5 9.664 5.336 10 5.75 10C6.164 10 6.5 9.664 6.5 9.25C6.5 8.836 6.164 8.5 5.75 8.5C5.336 8.5 5 8.836 5 9.25ZM8.25 9.25C8.25 9.664 8.586 10 9 10C9.414 10 9.75 9.664 9.75 9.25C9.75 8.836 9.414 8.5 9 8.5C8.586 8.5 8.25 8.836 8.25 9.25ZM11.5 9.25C11.5 9.664 11.836 10 12.25 10C12.664 10 13 9.664 13 9.25C13 8.836 12.664 8.5 12.25 8.5C11.836 8.5 11.5 8.836 11.5 9.25ZM5.25 2C4.83579 2 4.5 2.33579 4.5 2.75V5.75C4.5 6.16421 4.83579 6.5 5.25 6.5H12.75C13.1642 6.5 13.5 6.16421 13.5 5.75V2.75C13.5 2.33579 13.1642 2 12.75 2H5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.75 11C5.33579 11 5 11.3358 5 11.75V16.25C5 17.2162 5.78379 18 6.75 18H11.25C12.2162 18 13 17.2162 13 16.25V11.75C13 11.3358 12.6642 11 12.25 11H5.75ZM9 12.5H6.5V16.25C6.5 16.3878 6.61221 16.5 6.75 16.5H9V12.5ZM10.5 16.5V12.5H11.5V16.25C11.5 16.3878 11.3878 16.5 11.25 16.5H10.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Pos;
