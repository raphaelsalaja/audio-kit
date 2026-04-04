import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartBarAxisX({
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
          d="M9.25 2.75H8.75C8.198 2.75 7.75 3.1977 7.75 3.75V11.25C7.75 11.8023 8.198 12.25 8.75 12.25H9.25C9.802 12.25 10.25 11.8023 10.25 11.25V3.75C10.25 3.1977 9.802 2.75 9.25 2.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 5.75H3.25C2.698 5.75 2.25 6.1977 2.25 6.75V11.25C2.25 11.8023 2.698 12.25 3.25 12.25H3.75C4.302 12.25 4.75 11.8023 4.75 11.25V6.75C4.75 6.1977 4.302 5.75 3.75 5.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 8.75H14.25C13.698 8.75 13.25 9.1977 13.25 9.75V11.25C13.25 11.8023 13.698 12.25 14.25 12.25H14.75C15.302 12.25 15.75 11.8023 15.75 11.25V9.75C15.75 9.1977 15.302 8.75 14.75 8.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 15.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 2.75H8.75C8.198 2.75 7.75 3.1977 7.75 3.75V11.25C7.75 11.8023 8.198 12.25 8.75 12.25H9.25C9.802 12.25 10.25 11.8023 10.25 11.25V3.75C10.25 3.1977 9.802 2.75 9.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 5.75H3.25C2.698 5.75 2.25 6.1977 2.25 6.75V11.25C2.25 11.8023 2.698 12.25 3.25 12.25H3.75C4.302 12.25 4.75 11.8023 4.75 11.25V6.75C4.75 6.1977 4.302 5.75 3.75 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 8.75H14.25C13.698 8.75 13.25 9.1977 13.25 9.75V11.25C13.25 11.8023 13.698 12.25 14.25 12.25H14.75C15.302 12.25 15.75 11.8023 15.75 11.25V9.75C15.75 9.1977 15.302 8.75 14.75 8.75Z"
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

export default ChartBarAxisX;
