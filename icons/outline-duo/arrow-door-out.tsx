import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDoorOut({
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
          d="M14.544 2.64801L11.223 4.70701C10.929 4.88901 10.75 5.21101 10.75 5.55701V12.444C10.75 12.79 10.929 13.111 11.223 13.294L14.545 15.354"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 5.75V3.25C6.25 2.698 6.698 2.25 7.25 2.25H13.75C14.302 2.25 14.75 2.698 14.75 3.25V14.75C14.75 15.302 14.302 15.75 13.75 15.75H7.25C6.698 15.75 6.25 15.302 6.25 14.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.5 6.25L0.75 9L3.5 11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 9H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.543 2.64801L11.222 4.70701C10.928 4.88901 10.749 5.21101 10.749 5.55701V12.444C10.749 12.79 10.928 13.111 11.222 13.294L14.544 15.354"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ArrowDoorOut;
