import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxDoor({
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
          d="M5.75 1C4.78379 1 4 1.78379 4 2.75V8.5H6.25C8.04542 8.5 9.5 9.95584 9.5 11.75V15.25C9.5 15.8942 9.31248 16.4948 8.989 17H14.25C14.6642 17 15 16.6642 15 16.25V2.75C15 1.78379 14.2162 1 13.25 1H5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11 9.25C11 8.83579 11.3358 8.5 11.75 8.5H12.75C13.1642 8.5 13.5 8.83579 13.5 9.25C13.5 9.66421 13.1642 10 12.75 10H11.75C11.3358 10 11 9.66421 11 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.98898 17H15.25C15.6642 17 16 16.6642 16 16.25C16 15.8358 15.6642 15.5 15.25 15.5H9.49051C9.4487 16.0494 9.27023 16.5607 8.98898 17Z"
          fill={fill}
        />
        <path
          d="M2.75 10C1.78334 10 1 10.7839 1 11.75V15.25C1 16.2161 1.78334 17 2.75 17H6.25C7.21666 17 8 16.2161 8 15.25V11.75C8 10.7839 7.21666 10 6.25 10H5.25V12.75C5.25 13.1642 4.91421 13.5 4.5 13.5C4.08579 13.5 3.75 13.1642 3.75 12.75V10H2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BoxDoor;
