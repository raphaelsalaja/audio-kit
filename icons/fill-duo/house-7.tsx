import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function House7({
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
          d="M8.54548 1.40341C8.81398 1.19886 9.18604 1.19886 9.45453 1.40343L14.7045 5.40343C14.8907 5.54528 15 5.76593 15 6V16.25C15 16.6642 14.6642 17 14.25 17H3.75C3.33579 17 3 16.6642 3 16.25V5.99979C3 5.76571 3.10929 5.54506 3.29548 5.4032L8.54548 1.40341Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.75 16.25V12.25C6.75 11.5598 7.30979 11 8 11H10C10.6902 11 11.25 11.5598 11.25 12.25V16.25H6.75Z"
          fill={fill}
        />
        <path
          d="M9.60001 7H8.39999C8.17899 7 8 7.1791 8 7.4V8.6C8 8.8209 8.17899 9 8.39999 9H9.60001C9.82101 9 10 8.8209 10 8.6V7.4C10 7.1791 9.82101 7 9.60001 7Z"
          fill={fill}
        />
        <path
          d="M9.45001 1.15C9.18335 0.95 8.81668 0.95 8.55001 1.15L5.5 3.43751V2.25C5.5 1.83579 5.16421 1.5 4.75 1.5C4.33579 1.5 4 1.83579 4 2.25V4.56251L1.55001 6.4C1.21864 6.64853 1.15149 7.11863 1.40001 7.45C1.64854 7.78137 2.11864 7.84853 2.45001 7.6L9.00001 2.6875L15.55 7.6C15.8814 7.84853 16.3515 7.78137 16.6 7.45C16.8485 7.11863 16.7814 6.64853 16.45 6.4L9.45001 1.15Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 16.25C1 15.8358 1.33579 15.5 1.75 15.5H16.25C16.6642 15.5 17 15.8358 17 16.25C17 16.6642 16.6642 17 16.25 17H1.75C1.33579 17 1 16.6642 1 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default House7;
