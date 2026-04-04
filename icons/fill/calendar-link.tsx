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
          d="M5.75 3.5C5.336 3.5 5 3.164 5 2.75V0.75C5 0.336 5.336 0 5.75 0C6.164 0 6.5 0.336 6.5 0.75V2.75C6.5 3.164 6.164 3.5 5.75 3.5Z"
          fill={fill}
        />
        <path
          d="M12.25 3.5C11.836 3.5 11.5 3.164 11.5 2.75V0.75C11.5 0.336 11.836 0 12.25 0C12.664 0 13 0.336 13 0.75V2.75C13 3.164 12.664 3.5 12.25 3.5Z"
          fill={fill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H6.27858C6.69258 16 7.02858 15.664 7.02858 15.25C7.02858 14.836 6.69258 14.5 6.27858 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V9.32699C15 9.74099 15.336 10.077 15.75 10.077C16.164 10.077 16.5 9.74099 16.5 9.32699V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
        <path
          d="M11 13C10.4477 13 10 13.4477 10 14V15C10 15.5523 10.4477 16 11 16H11.5C11.9142 16 12.25 16.3358 12.25 16.75C12.25 17.1642 11.9142 17.5 11.5 17.5H11C9.61929 17.5 8.5 16.3807 8.5 15V14C8.5 12.6193 9.61929 11.5 11 11.5H11.5C11.9142 11.5 12.25 11.8358 12.25 12.25C12.25 12.6642 11.9142 13 11.5 13H11Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M13.75 12.25C13.75 11.8358 14.0858 11.5 14.5 11.5H15C16.3807 11.5 17.5 12.6193 17.5 14V15C17.5 16.3807 16.3807 17.5 15 17.5H14.5C14.0858 17.5 13.75 17.1642 13.75 16.75C13.75 16.3358 14.0858 16 14.5 16H15C15.5523 16 16 15.5523 16 15V14C16 13.4477 15.5523 13 15 13H14.5C14.0858 13 13.75 12.6642 13.75 12.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M11 14.5C11 14.0858 11.3358 13.75 11.75 13.75H14.25C14.6642 13.75 15 14.0858 15 14.5C15 14.9142 14.6642 15.25 14.25 15.25H11.75C11.3358 15.25 11 14.9142 11 14.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarLink;
