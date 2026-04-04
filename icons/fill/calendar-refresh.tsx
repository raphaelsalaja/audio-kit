import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarRefresh({
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
          d="M16.75 10C16.336 10 16 10.336 16 10.75V11.125C15.428 10.727 14.737 10.5 14 10.5C12.07 10.5 10.5 12.07 10.5 14C10.5 15.93 12.07 17.5 14 17.5C14.96 17.5 15.888 17.1 16.546 16.402C16.83 16.101 16.816 15.626 16.515 15.342C16.214 15.058 15.738 15.072 15.454 15.373C15.073 15.778 14.557 16 14 16C12.897 16 12 15.103 12 14C12 12.897 12.897 12 14 12C14.494 12 14.94 12.193 15.295 12.5H14.25C13.836 12.5 13.5 12.836 13.5 13.25C13.5 13.664 13.836 14 14.25 14H16.75C17.164 14 17.5 13.664 17.5 13.25V10.75C17.5 10.336 17.164 10 16.75 10Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H8.38554C8.79954 16 9.13554 15.664 9.13554 15.25C9.13554 14.836 8.79954 14.5 8.38554 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V7.92949C15 8.34349 15.336 8.67949 15.75 8.67949C16.164 8.67949 16.5 8.34349 16.5 7.92949V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarRefresh;
