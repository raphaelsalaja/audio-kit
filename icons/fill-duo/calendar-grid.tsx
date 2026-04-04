import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarGrid({
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
          d="M1.5 11.5V10H5.5V5.25C5.5 4.83579 5.83579 4.5 6.25 4.5C6.66421 4.5 7 4.83579 7 5.25V10H11V5.25C11 4.83579 11.3358 4.5 11.75 4.5C12.1642 4.5 12.5 4.83579 12.5 5.25V10H16.5V11.5H12.5V16H11V11.5H7V16H5.5V11.5H1.5Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M5.5 16V11.5H1.5V13.25C1.5 14.7693 2.73128 16 4.25 16H5.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path d="M11 16V11.5H7V16H11Z" fill={secondaryfill} fillOpacity="0.4" />
        <path
          d="M16.5 11.5H12.5V16H13.75C15.2687 16 16.5 14.7693 16.5 13.25V11.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.5 2H4.25C2.73128 2 1.5 3.23069 1.5 4.75V10H5.5V2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.5 10V4.75C16.5 3.23069 15.2687 2 13.75 2H12.5V10H16.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path d="M11 2H7V10H11V2Z" fill={secondaryfill} fillOpacity="0.4" />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarGrid;
