import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Plug({
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
          d="M3.75 5H14.25C14.802 5 15.25 5.448 15.25 6V8.25C15.25 11.699 12.449 14.5 9 14.5C5.551 14.5 2.75 11.699 2.75 8.25L2.75 6C2.75 5.448 3.198 5 3.75 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.25 14.4554V16.25C8.25 16.6642 8.58579 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25V14.4554C9.50408 14.4848 9.25379 14.5 9 14.5C8.74621 14.5 8.49592 14.4848 8.25 14.4554Z"
          fill={fill}
        />
        <path
          d="M9 11C9.552 11 10 10.5467 10 10C10 9.45333 9.552 9 9 9C8.448 9 8 9.45333 8 10C8 10.5467 8.448 11 9 11Z"
          fill={fill}
        />
        <path
          d="M6.25 1C6.66421 1 7 1.33579 7 1.75V5H5.5V1.75C5.5 1.33579 5.83579 1 6.25 1Z"
          fill={fill}
        />
        <path
          d="M12.5 5V1.75C12.5 1.33579 12.1642 1 11.75 1C11.3358 1 11 1.33579 11 1.75V5H12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Plug;
