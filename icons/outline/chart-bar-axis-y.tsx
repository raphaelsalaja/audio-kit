import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartBarAxisY({
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
          d="M2.75 1.75V16.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 9.25V8.75C15.25 8.198 14.8023 7.75 14.25 7.75H6.75C6.1977 7.75 5.75 8.198 5.75 8.75V9.25C5.75 9.802 6.1977 10.25 6.75 10.25H14.25C14.8023 10.25 15.25 9.802 15.25 9.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 3.75V3.25C12.25 2.698 11.8023 2.25 11.25 2.25H6.75C6.1977 2.25 5.75 2.698 5.75 3.25V3.75C5.75 4.302 6.1977 4.75 6.75 4.75H11.25C11.8023 4.75 12.25 4.302 12.25 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 14.75V14.25C9.25 13.698 8.8023 13.25 8.25 13.25H6.75C6.1977 13.25 5.75 13.698 5.75 14.25V14.75C5.75 15.302 6.1977 15.75 6.75 15.75H8.25C8.8023 15.75 9.25 15.302 9.25 14.75Z"
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

export default ChartBarAxisY;
