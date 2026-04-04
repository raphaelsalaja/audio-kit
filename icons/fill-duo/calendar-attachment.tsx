import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarAttachment({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H10.1661C10.0578 15.6017 10 15.1826 10 14.75V12.25C10 10.3174 11.5674 8.75 13.5 8.75C14.773 8.75 15.8875 9.43001 16.5 10.4465V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 12.25C11.5 11.1458 12.3958 10.25 13.5 10.25C14.6042 10.25 15.5 11.1458 15.5 12.25V14.25C15.5 14.6642 15.1642 15 14.75 15C14.3358 15 14 14.6642 14 14.25V12.25C14 11.9742 13.7758 11.75 13.5 11.75C13.2242 11.75 13 11.9742 13 12.25V14.75C13 15.7168 13.7832 16.5 14.75 16.5C15.7168 16.5 16.5 15.7168 16.5 14.75V12.75C16.5 12.3358 16.8358 12 17.25 12C17.6642 12 18 12.3358 18 12.75V14.75C18 16.5452 16.5452 18 14.75 18C12.9548 18 11.5 16.5452 11.5 14.75V12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarAttachment;
