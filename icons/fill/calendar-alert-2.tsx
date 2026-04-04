import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarAlert2({
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
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H5.77734C6.19134 16 6.52734 15.664 6.52734 15.25C6.52734 14.836 6.19134 14.5 5.77734 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V13.25C15 13.939 14.439 14.5 13.75 14.5H12.2266C11.8126 14.5 11.4766 14.836 11.4766 15.25C11.4766 15.664 11.8126 16 12.2266 16H13.75C15.267 16 16.5 14.767 16.5 13.25V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
        <path
          d="M9 9C9.41421 9 9.75 9.33579 9.75 9.75V12.5C9.75 12.9142 9.41421 13.25 9 13.25C8.58579 13.25 8.25 12.9142 8.25 12.5V9.75C8.25 9.33579 8.58579 9 9 9Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9 16.5C9.552 16.5 10 16.052 10 15.5C10 14.948 9.552 14.5 9 14.5C8.448 14.5 8 14.948 8 15.5C8 16.052 8.448 16.5 9 16.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CalendarAlert2;
