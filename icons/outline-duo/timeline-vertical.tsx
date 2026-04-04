import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TimelineVertical({
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
          d="M15.25 2.75H13.25C12.698 2.75 12.25 3.198 12.25 3.75V5.75C12.25 6.302 12.698 6.75 13.25 6.75H15.25C15.802 6.75 16.25 6.302 16.25 5.75V3.75C16.25 3.198 15.802 2.75 15.25 2.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 8V10C1.75 10.552 2.198 11 2.75 11H4.75C5.302 11 5.75 10.552 5.75 10V8C5.75 7.448 5.302 7 4.75 7H2.75C2.198 7 1.75 7.448 1.75 8Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 11.25H13.25C12.698 11.25 12.25 11.698 12.25 12.25V14.25C12.25 14.802 12.698 15.25 13.25 15.25H15.25C15.802 15.25 16.25 14.802 16.25 14.25V12.25C16.25 11.698 15.802 11.25 15.25 11.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 2.75H13.25C12.698 2.75 12.25 3.198 12.25 3.75V5.75C12.25 6.302 12.698 6.75 13.25 6.75H15.25C15.802 6.75 16.25 6.302 16.25 5.75V3.75C16.25 3.198 15.802 2.75 15.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 1.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 4.75H9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 8V10C1.75 10.552 2.198 11 2.75 11H4.75C5.302 11 5.75 10.552 5.75 10V8C5.75 7.448 5.302 7 4.75 7H2.75C2.198 7 1.75 7.448 1.75 8Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9H5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 11.25H13.25C12.698 11.25 12.25 11.698 12.25 12.25V14.25C12.25 14.802 12.698 15.25 13.25 15.25H15.25C15.802 15.25 16.25 14.802 16.25 14.25V12.25C16.25 11.698 15.802 11.25 15.25 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 13.25H9"
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

export default TimelineVertical;
