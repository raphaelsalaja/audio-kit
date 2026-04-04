import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarPlanning({
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
          d="M1.5 4.75C1.5 3.23069 2.73128 2 4.25 2H13.75C15.2687 2 16.5 3.23069 16.5 4.75V13.25C16.5 14.7693 15.2687 16 13.75 16H4.25C2.73128 16 1.5 14.7693 1.5 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 9.25C4 8.83579 4.33579 8.5 4.75 8.5H8C8.41421 8.5 8.75 8.83579 8.75 9.25C8.75 9.66421 8.41421 10 8 10H4.75C4.33579 10 4 9.66421 4 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 9.25C12 8.83579 12.3358 8.5 12.75 8.5H13.25C13.6642 8.5 14 8.83579 14 9.25C14 9.66421 13.6642 10 13.25 10H12.75C12.3358 10 12 9.66421 12 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 12.25C7 11.8358 7.33579 11.5 7.75 11.5H12.25C12.6642 11.5 13 11.8358 13 12.25C13 12.6642 12.6642 13 12.25 13H7.75C7.33579 13 7 12.6642 7 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarPlanning;
