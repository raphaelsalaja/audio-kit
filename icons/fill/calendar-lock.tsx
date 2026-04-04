import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarLock({
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
          d="M16.5 13.025V12.25C16.5 11.009 15.491 10 14.25 10C13.009 10 12 11.009 12 12.25V13.025C11.154 13.148 10.5 13.87 10.5 14.75V16.25C10.5 17.215 11.285 18 12.25 18H16.25C17.215 18 18 17.215 18 16.25V14.75C18 13.871 17.346 13.148 16.5 13.025ZM14.25 11.5C14.664 11.5 15 11.836 15 12.25V13H13.5V12.25C13.5 11.836 13.836 11.5 14.25 11.5Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H8.25459C8.66859 16 9.00459 15.664 9.00459 15.25C9.00459 14.836 8.66859 14.5 8.25459 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V8.01742C15 8.43142 15.336 8.76742 15.75 8.76742C16.164 8.76742 16.5 8.43142 16.5 8.01742V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarLock;
