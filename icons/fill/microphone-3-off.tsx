import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Microphone3Off({
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
          d="M8.99979 0C6.79056 0 4.99979 1.7909 4.99979 4V7.5C4.99979 9.08224 5.91844 10.4485 7.24826 11.097L12.1931 6.5H9.74979C9.33557 6.5 8.99979 6.16421 8.99979 5.75C8.99979 5.33579 9.33557 5 9.74979 5H12.9998V4C12.9998 1.7909 11.209 0 8.99979 0Z"
          fill={fill}
        />
        <path
          d="M4.86401 13.136L5.93601 12.064C4.46801 11.075 3.50101 9.398 3.50101 7.5C3.50101 7.086 3.16501 6.75 2.75101 6.75C2.33701 6.75 2.00101 7.086 2.00101 7.5C2.00101 9.812 3.13001 11.861 4.86401 13.136Z"
          fill={secondaryfill}
        />
        <path
          d="M15.2498 6.75C15.664 6.75 15.9998 7.08579 15.9998 7.5C15.9998 11.1069 13.2586 14.0848 9.74979 14.4601V16.5H12.2498C12.664 16.5 12.9998 16.8358 12.9998 17.25C12.9998 17.6642 12.664 18 12.2498 18H5.74979C5.33557 18 4.99979 17.6642 4.99979 17.25C4.99979 16.8358 5.33557 16.5 5.74979 16.5H8.24979V13.75C8.24979 13.3358 8.58557 13 8.99979 13C12.0316 13 14.4998 10.5318 14.4998 7.5C14.4998 7.08579 14.8356 6.75 15.2498 6.75Z"
          fill={secondaryfill}
        />
        <path
          d="M1.99999 16.75C1.80799 16.75 1.61599 16.677 1.46999 16.53C1.17699 16.237 1.17699 15.762 1.46999 15.469L15.47 1.46999C15.763 1.17699 16.238 1.17699 16.531 1.46999C16.824 1.76299 16.824 2.23799 16.531 2.53099L2.52999 16.53C2.38399 16.676 2.19199 16.75 1.99999 16.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Microphone3Off;
