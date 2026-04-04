import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarPlus({
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
          d="M17.25 12H15.5V10.25C15.5 9.836 15.164 9.5 14.75 9.5C14.336 9.5 14 9.836 14 10.25V12H12.25C11.836 12 11.5 12.336 11.5 12.75C11.5 13.164 11.836 13.5 12.25 13.5H14V15.25C14 15.664 14.336 16 14.75 16C15.164 16 15.5 15.664 15.5 15.25V13.5H17.25C17.664 13.5 18 13.164 18 12.75C18 12.336 17.664 12 17.25 12Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H10.6228C11.0368 16 11.3728 15.664 11.3728 15.25C11.3728 14.836 11.0368 14.5 10.6228 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V7.42706C15 7.84106 15.336 8.17706 15.75 8.17706C16.164 8.17706 16.5 7.84106 16.5 7.42706V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarPlus;
