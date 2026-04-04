import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarPhone({
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
          d="M13.75 2H13V0.75C13 0.336 12.664 0 12.25 0C11.836 0 11.5 0.336 11.5 0.75V2H6.5V0.75C6.5 0.336 6.164 0 5.75 0C5.336 0 5 0.336 5 0.75V2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H8.27656C8.69056 16 9.02656 15.664 9.02656 15.25C9.02656 14.836 8.69056 14.5 8.27656 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V10.9116C15 11.3256 15.336 11.6616 15.75 11.6616C16.164 11.6616 16.5 11.3256 16.5 10.9116V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
        <path
          d="M16.235 13.499L15.376 13.151C14.856 12.921 14.247 13.068 13.909 13.491L12.901 14.66C12.277 14.256 11.744 13.723 11.339 13.099L12.489 12.107C12.93 11.753 13.079 11.144 12.858 10.646L12.49 9.74299C12.242 9.17999 11.622 8.88599 10.989 9.05299L9.87699 9.41799C9.33399 9.59699 8.97799 10.115 9.01299 10.68C9.22599 14.062 11.937 16.773 15.32 16.986C15.345 16.987 15.372 16.988 15.397 16.988C15.93 16.988 16.411 16.64 16.582 16.121L16.96 14.965C17.115 14.37 16.819 13.757 16.235 13.499Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CalendarPhone;
