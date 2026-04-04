import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarDays({
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
          d="M9 8C8.449 8 8 8.449 8 9C8 9.551 8.449 10 9 10C9.551 10 10 9.551 10 9C10 8.449 9.551 8 9 8Z"
          fill={fill}
        />
        <path
          d="M12.5 10C13.051 10 13.5 9.551 13.5 9C13.5 8.449 13.051 8 12.5 8C11.949 8 11.5 8.449 11.5 9C11.5 9.551 11.949 10 12.5 10Z"
          fill={fill}
        />
        <path
          d="M9 11.5C8.449 11.5 8 11.949 8 12.5C8 13.051 8.449 13.5 9 13.5C9.551 13.5 10 13.051 10 12.5C10 11.949 9.551 11.5 9 11.5Z"
          fill={fill}
        />
        <path
          d="M5.5 11.5C4.949 11.5 4.5 11.949 4.5 12.5C4.5 13.051 4.949 13.5 5.5 13.5C6.051 13.5 6.5 13.051 6.5 12.5C6.5 11.949 6.051 11.5 5.5 11.5Z"
          fill={fill}
        />
        <path
          d="M12.5 11.5C11.949 11.5 11.5 11.949 11.5 12.5C11.5 13.051 11.949 13.5 12.5 13.5C13.051 13.5 13.5 13.051 13.5 12.5C13.5 11.949 13.051 11.5 12.5 11.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarDays;
