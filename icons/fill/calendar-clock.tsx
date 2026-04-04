import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarClock({
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
          d="M14 10C11.794 10 10 11.794 10 14C10 16.206 11.794 18 14 18C16.206 18 18 16.206 18 14C18 11.794 16.206 10 14 10ZM16.312 14.95C16.193 15.24 15.914 15.415 15.619 15.415C15.523 15.415 15.428 15.397 15.334 15.359L13.715 14.694C13.434 14.578 13.25 14.304 13.25 14V12.25C13.25 11.836 13.586 11.5 14 11.5C14.414 11.5 14.75 11.836 14.75 12.25V13.497L15.904 13.971C16.287 14.128 16.47 14.567 16.312 14.95Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H7.87262C8.28662 16 8.62262 15.664 8.62262 15.25C8.62262 14.836 8.28662 14.5 7.87262 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V8.00176C15 8.41576 15.336 8.75176 15.75 8.75176C16.164 8.75176 16.5 8.41576 16.5 8.00176V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarClock;
