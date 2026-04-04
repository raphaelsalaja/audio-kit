import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColMergeRight({
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
          d="M4.75 16H13C13.8477 16 14.6348 15.6152 15.1592 14.9443C15.4141 14.6181 15.3565 14.1464 15.0303 13.8916C14.7051 13.6353 14.2315 13.6963 13.9776 14.0205C13.7393 14.3252 13.3829 14.5 13.0001 14.5H9.00009V3.5H13.0001C13.3839 3.5 13.7403 3.67479 13.9786 3.97949C14.2325 4.30569 14.7061 4.3657 15.0313 4.1084C15.3575 3.8535 15.4151 3.38176 15.1602 3.05566C14.6358 2.38476 13.8487 2 13 2H4.75C3.2334 2 2 3.2334 2 4.75V13.25C2 14.7666 3.2334 16 4.75 16Z"
          fill={fill}
        />
        <path
          d="M17.78 8.46999L15.28 5.96999C14.987 5.68009 14.512 5.68009 14.219 5.96999C13.926 6.25999 13.926 6.74007 14.219 7.03017L15.439 8.25014H11.75C11.336 8.25014 11 8.59014 11 9.00014C11 9.41014 11.336 9.75014 11.75 9.75014H15.439L14.219 10.9701C13.926 11.2601 13.926 11.7401 14.219 12.0302C14.365 12.1802 14.557 12.2503 14.749 12.2503C14.941 12.2503 15.133 12.1803 15.279 12.0302L17.78 9.53017C18.073 9.24017 18.073 8.76009 17.78 8.46999Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TableColMergeRight;
