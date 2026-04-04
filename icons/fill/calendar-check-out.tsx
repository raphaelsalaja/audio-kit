import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarCheckOut({
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
          d="M16.78 13.72L14.28 11.22C13.987 10.927 13.512 10.927 13.219 11.22C12.926 11.513 12.926 11.988 13.219 12.281L14.439 13.501H11.25C10.836 13.501 10.5 13.837 10.5 14.251C10.5 14.665 10.836 15.001 11.25 15.001H14.439L13.219 16.221C12.926 16.514 12.926 16.989 13.219 17.282C13.365 17.428 13.557 17.502 13.749 17.502C13.941 17.502 14.133 17.429 14.279 17.282L16.779 14.782C17.072 14.489 17.072 14.014 16.779 13.721L16.78 13.72Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H8.42476C8.83876 16 9.17476 15.664 9.17476 15.25C9.17476 14.836 8.83876 14.5 8.42476 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V9.53037C15 9.94437 15.336 10.2804 15.75 10.2804C16.164 10.2804 16.5 9.94437 16.5 9.53037V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarCheckOut;
