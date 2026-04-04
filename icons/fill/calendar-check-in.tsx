import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarCheckIn({
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
          d="M16.25 13.5H13.061L14.281 12.28C14.574 11.987 14.574 11.512 14.281 11.219C13.988 10.926 13.513 10.926 13.22 11.219L10.72 13.719C10.427 14.012 10.427 14.487 10.72 14.78L13.22 17.28C13.366 17.426 13.558 17.5 13.75 17.5C13.942 17.5 14.134 17.427 14.28 17.28C14.573 16.987 14.573 16.512 14.28 16.219L13.06 14.999H16.249C16.663 14.999 16.999 14.663 16.999 14.249C16.999 13.835 16.663 13.499 16.249 13.499L16.25 13.5Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H8.4329C8.8469 16 9.1829 15.664 9.1829 15.25C9.1829 14.836 8.8469 14.5 8.4329 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V9.52486C15 9.93886 15.336 10.2749 15.75 10.2749C16.164 10.2749 16.5 9.93886 16.5 9.52486V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarCheckIn;
