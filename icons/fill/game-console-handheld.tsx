import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GameConsoleHandheld({
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
          d="M13.75 1.5H4.25C3.285 1.5 2.5 2.285 2.5 3.25V14.75C2.5 15.715 3.285 16.5 4.25 16.5H11.75C13.818 16.5 15.5 14.818 15.5 12.75V3.25C15.5 2.285 14.715 1.5 13.75 1.5ZM13 7.75C13 8.164 12.664 8.5 12.25 8.5H5.75C5.336 8.5 5 8.164 5 7.75V4.25C5 3.836 5.336 3.5 5.75 3.5H12.25C12.664 3.5 13 3.836 13 4.25V7.75ZM11.25 13.5C11.6642 13.5 12 13.1642 12 12.75C12 12.3358 11.6642 12 11.25 12C10.8358 12 10.5 12.3358 10.5 12.75C10.5 13.1642 10.8358 13.5 11.25 13.5ZM13 10.75C13 11.1642 12.6642 11.5 12.25 11.5C11.8358 11.5 11.5 11.1642 11.5 10.75C11.5 10.3358 11.8358 10 12.25 10C12.6642 10 13 10.3358 13 10.75ZM7.25 9.5C7.66421 9.5 8 9.83579 8 10.25V11H8.75C9.16421 11 9.5 11.3358 9.5 11.75C9.5 12.1642 9.16421 12.5 8.75 12.5H8V13.25C8 13.6642 7.66421 14 7.25 14C6.83579 14 6.5 13.6642 6.5 13.25V12.5H5.75C5.33579 12.5 5 12.1642 5 11.75C5 11.3358 5.33579 11 5.75 11H6.5V10.25C6.5 9.83579 6.83579 9.5 7.25 9.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default GameConsoleHandheld;
