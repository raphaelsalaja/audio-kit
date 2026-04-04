import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarKey({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H7.37586C7.13441 15.4663 7 14.8739 7 14.25C7 11.9028 8.90276 10 11.25 10C12.7722 10 14.1053 10.7994 14.8558 12H16.5V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.5 14.25C8.5 12.7312 9.73119 11.5 11.25 11.5C12.5088 11.5 13.57 12.3457 13.8965 13.5H17.25C17.6642 13.5 18 13.8358 18 14.25C18 14.6642 17.6642 15 17.25 15H16.5V15.75C16.5 16.1642 16.1642 16.5 15.75 16.5C15.3358 16.5 15 16.1642 15 15.75V15H13.8965C13.57 16.1543 12.5088 17 11.25 17C9.73119 17 8.5 15.7688 8.5 14.25ZM11.25 13C10.5596 13 10 13.5596 10 14.25C10 14.9404 10.5596 15.5 11.25 15.5C11.9404 15.5 12.5 14.9404 12.5 14.25C12.5 13.5596 11.9404 13 11.25 13Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarKey;
