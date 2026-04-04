import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarLink({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H7.12602C7.04375 15.6804 7 15.3453 7 15V14C7 11.7909 8.79086 10 11 10C12.3333 10 13.6667 10 15 10C15.5305 10 16.0368 10.1033 16.5 10.2908V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11 13C10.4477 13 10 13.4477 10 14V15C10 15.5523 10.4477 16 11 16H11.5C11.9142 16 12.25 16.3358 12.25 16.75C12.25 17.1642 11.9142 17.5 11.5 17.5H11C9.61929 17.5 8.5 16.3807 8.5 15V14C8.5 12.6193 9.61929 11.5 11 11.5H11.5C11.9142 11.5 12.25 11.8358 12.25 12.25C12.25 12.6642 11.9142 13 11.5 13H11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.75 12.25C13.75 11.8358 14.0858 11.5 14.5 11.5H15C16.3807 11.5 17.5 12.6193 17.5 14V15C17.5 16.3807 16.3807 17.5 15 17.5H14.5C14.0858 17.5 13.75 17.1642 13.75 16.75C13.75 16.3358 14.0858 16 14.5 16H15C15.5523 16 16 15.5523 16 15V14C16 13.4477 15.5523 13 15 13H14.5C14.0858 13 13.75 12.6642 13.75 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11 14.5C11 14.0858 11.3358 13.75 11.75 13.75H14.25C14.6642 13.75 15 14.0858 15 14.5C15 14.9142 14.6642 15.25 14.25 15.25H11.75C11.3358 15.25 11 14.9142 11 14.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarLink;
