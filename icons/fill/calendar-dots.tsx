import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarDots({
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
          d="M13 14C12.449 14 12 13.552 12 13C12 12.448 12.449 12 13 12C13.551 12 14 12.448 14 13C14 13.552 13.551 14 13 14Z"
          fill={secondaryfill}
        />
        <path
          d="M10 14C9.449 14 9 13.552 9 13C9 12.448 9.449 12 10 12C10.551 12 11 12.448 11 13C11 13.552 10.551 14 10 14Z"
          fill={secondaryfill}
        />
        <path
          d="M16 14C15.449 14 15 13.552 15 13C15 12.448 15.449 12 16 12C16.551 12 17 12.448 17 13C17 13.552 16.551 14 16 14Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H7.66107C8.07507 16 8.41107 15.664 8.41107 15.25C8.41107 14.836 8.07507 14.5 7.66107 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V9.78234C15 10.1963 15.336 10.5323 15.75 10.5323C16.164 10.5323 16.5 10.1963 16.5 9.78234V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarDots;
