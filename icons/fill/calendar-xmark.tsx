import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarXmark({
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
          d="M15.811 14.75L17.281 13.28C17.574 12.987 17.574 12.512 17.281 12.219C16.988 11.926 16.513 11.926 16.22 12.219L14.75 13.689L13.28 12.219C12.987 11.926 12.512 11.926 12.219 12.219C11.926 12.512 11.926 12.987 12.219 13.28L13.689 14.75L12.219 16.22C11.926 16.513 11.926 16.988 12.219 17.281C12.365 17.427 12.557 17.501 12.749 17.501C12.941 17.501 13.133 17.428 13.279 17.281L14.749 15.811L16.219 17.281C16.365 17.427 16.557 17.501 16.749 17.501C16.941 17.501 17.133 17.428 17.279 17.281C17.572 16.988 17.572 16.513 17.279 16.22L15.809 14.75H15.811Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H10.17C10.584 16 10.92 15.664 10.92 15.25C10.92 14.836 10.584 14.5 10.17 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V9.93344C15 10.3474 15.336 10.6834 15.75 10.6834C16.164 10.6834 16.5 10.3474 16.5 9.93344V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarXmark;
