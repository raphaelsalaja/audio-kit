import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EditEasing({
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
          d="M4.75 2.75H2.75C2.19772 2.75 1.75 3.19772 1.75 3.75V5.75C1.75 6.30228 2.19772 6.75 2.75 6.75H4.75C5.30228 6.75 5.75 6.30228 5.75 5.75V3.75C5.75 3.19772 5.30228 2.75 4.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 11.25H13.25C12.6977 11.25 12.25 11.6977 12.25 12.25V14.25C12.25 14.8023 12.6977 15.25 13.25 15.25H15.25C15.8023 15.25 16.25 14.8023 16.25 14.25V12.25C16.25 11.6977 15.8023 11.25 15.25 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11 4.75H6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5 6.25C13.3284 6.25 14 5.57843 14 4.75C14 3.92157 13.3284 3.25 12.5 3.25C11.6716 3.25 11 3.92157 11 4.75C11 5.57843 11.6716 6.25 12.5 6.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7 13.25H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5 14.75C6.32843 14.75 7 14.0784 7 13.25C7 12.4216 6.32843 11.75 5.5 11.75C4.67157 11.75 4 12.4216 4 13.25C4 14.0784 4.67157 14.75 5.5 14.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.75 4.75C10.5 4.75 7.5 13.25 12.25 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 2.75H2.75C2.19772 2.75 1.75 3.19772 1.75 3.75V5.75C1.75 6.30228 2.19772 6.75 2.75 6.75H4.75C5.30228 6.75 5.75 6.30228 5.75 5.75V3.75C5.75 3.19772 5.30228 2.75 4.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 11.25H13.25C12.6977 11.25 12.25 11.6977 12.25 12.25V14.25C12.25 14.8023 12.6977 15.25 13.25 15.25H15.25C15.8023 15.25 16.25 14.8023 16.25 14.25V12.25C16.25 11.6977 15.8023 11.25 15.25 11.25Z"
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

export default EditEasing;
