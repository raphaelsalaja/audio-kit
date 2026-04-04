import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ViewAll({
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
          d="M7.75 2.75H2.75C2.19772 2.75 1.75 3.19772 1.75 3.75V7.25C1.75 7.80228 2.19772 8.25 2.75 8.25H7.75C8.30228 8.25 8.75 7.80228 8.75 7.25V3.75C8.75 3.19772 8.30228 2.75 7.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 4.75H13.25C12.6977 4.75 12.25 5.19772 12.25 5.75V12.25C12.25 12.8023 12.6977 13.25 13.25 13.25H15.25C15.8023 13.25 16.25 12.8023 16.25 12.25V5.75C16.25 5.19772 15.8023 4.75 15.25 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.25 11.25H4.75C4.19772 11.25 3.75 11.6977 3.75 12.25V14.25C3.75 14.8023 4.19772 15.25 4.75 15.25H8.25C8.80228 15.25 9.25 14.8023 9.25 14.25V12.25C9.25 11.6977 8.80228 11.25 8.25 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.75 2.75H2.75C2.19772 2.75 1.75 3.19772 1.75 3.75V7.25C1.75 7.80228 2.19772 8.25 2.75 8.25H7.75C8.30228 8.25 8.75 7.80228 8.75 7.25V3.75C8.75 3.19772 8.30228 2.75 7.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 4.75H13.25C12.6977 4.75 12.25 5.19772 12.25 5.75V12.25C12.25 12.8023 12.6977 13.25 13.25 13.25H15.25C15.8023 13.25 16.25 12.8023 16.25 12.25V5.75C16.25 5.19772 15.8023 4.75 15.25 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 11.25H4.75C4.19772 11.25 3.75 11.6977 3.75 12.25V14.25C3.75 14.8023 4.19772 15.25 4.75 15.25H8.25C8.80228 15.25 9.25 14.8023 9.25 14.25V12.25C9.25 11.6977 8.80228 11.25 8.25 11.25Z"
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

export default ViewAll;
