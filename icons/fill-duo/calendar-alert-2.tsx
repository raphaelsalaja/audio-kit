import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarAlert2({
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
          d="M9 7.5C9.41421 7.5 9.75 7.83579 9.75 8.25V10.5C9.75 10.9142 9.41421 11.25 9 11.25C8.58579 11.25 8.25 10.9142 8.25 10.5L8.25 8.25C8.25 7.83579 8.58579 7.5 9 7.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 14.5C9.552 14.5 10 14.052 10 13.5C10 12.948 9.552 12.5 9 12.5C8.448 12.5 8 12.948 8 13.5C8 14.052 8.448 14.5 9 14.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarAlert2;
