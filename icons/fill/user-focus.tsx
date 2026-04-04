import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserFocus({
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
          d="M15.75 11C15.336 11 15 11.336 15 11.75V13.75C15 14.439 14.439 15 13.75 15H11.75C11.336 15 11 15.336 11 15.75C11 16.164 11.336 16.5 11.75 16.5H13.75C15.267 16.5 16.5 15.267 16.5 13.75V11.75C16.5 11.336 16.164 11 15.75 11Z"
          fill={fill}
        />
        <path
          d="M6.25 15H4.25C3.561 15 3 14.439 3 13.75V11.75C3 11.336 2.664 11 2.25 11C1.836 11 1.5 11.336 1.5 11.75V13.75C1.5 15.267 2.733 16.5 4.25 16.5H6.25C6.664 16.5 7 16.164 7 15.75C7 15.336 6.664 15 6.25 15Z"
          fill={fill}
        />
        <path
          d="M2.25 7C2.664 7 3 6.664 3 6.25V4.25C3 3.561 3.561 3 4.25 3H6.25C6.664 3 7 2.664 7 2.25C7 1.836 6.664 1.5 6.25 1.5H4.25C2.733 1.5 1.5 2.733 1.5 4.25V6.25C1.5 6.664 1.836 7 2.25 7Z"
          fill={fill}
        />
        <path
          d="M13.75 1.5H11.75C11.336 1.5 11 1.836 11 2.25C11 2.664 11.336 3 11.75 3H13.75C14.439 3 15 3.561 15 4.25V6.25C15 6.664 15.336 7 15.75 7C16.164 7 16.5 6.664 16.5 6.25V4.25C16.5 2.733 15.267 1.5 13.75 1.5Z"
          fill={fill}
        />
        <path
          d="M8.99997 9C10.105 9 11 8.105 11 7C11 5.895 10.105 5 8.99997 5C7.89497 5 6.99997 5.895 6.99997 7C6.99997 8.105 7.89497 9 8.99997 9Z"
          fill={secondaryfill}
        />
        <path
          d="M5.08052 12.3163C5.93509 11.0704 7.3715 10.2505 9.00001 10.2505C10.6285 10.2505 12.0649 11.0704 12.9195 12.3163C13.077 12.5459 13.0943 12.8438 12.9646 13.0901C12.8349 13.3364 12.5794 13.4905 12.301 13.4905H5.69901C5.42063 13.4905 5.16516 13.3364 5.03543 13.0901C4.9057 12.8438 4.92306 12.5459 5.08052 12.3163Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default UserFocus;
