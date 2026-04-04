import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarSearch({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H9.7578C9.27915 15.2849 9 14.4251 9 13.5C9 11.0148 11.0148 9 13.5 9C14.6525 9 15.7039 9.43329 16.5 10.1459V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.5 10.5C11.8432 10.5 10.5 11.8432 10.5 13.5C10.5 15.1568 11.8432 16.5 13.5 16.5C14.0563 16.5 14.5773 16.3485 15.024 16.0846L16.2197 17.2803C16.5126 17.5732 16.9874 17.5732 17.2803 17.2803C17.5732 16.9874 17.5732 16.5126 17.2803 16.2197L16.0846 15.024C16.3485 14.5773 16.5 14.0563 16.5 13.5C16.5 11.8432 15.1568 10.5 13.5 10.5ZM12 13.5C12 12.6716 12.6716 12 13.5 12C14.3284 12 15 12.6716 15 13.5C15 14.3284 14.3284 15 13.5 15C12.6716 15 12 14.3284 12 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarSearch;
