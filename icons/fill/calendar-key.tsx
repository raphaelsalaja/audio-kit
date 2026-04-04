import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarKey({
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
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H6.35221C6.76621 16 7.10221 15.664 7.10221 15.25C7.10221 14.836 6.76621 14.5 6.35221 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V11.2463C15 11.6603 15.336 11.9963 15.75 11.9963C16.164 11.9963 16.5 11.6603 16.5 11.2463V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
        <path
          d="M8.5 14.25C8.5 12.7312 9.73119 11.5 11.25 11.5C12.5088 11.5 13.57 12.3457 13.8965 13.5H17.25C17.6642 13.5 18 13.8358 18 14.25C18 14.6642 17.6642 15 17.25 15H16.5V15.75C16.5 16.1642 16.1642 16.5 15.75 16.5C15.3358 16.5 15 16.1642 15 15.75V15H13.8965C13.57 16.1543 12.5088 17 11.25 17C9.73119 17 8.5 15.7688 8.5 14.25ZM11.25 13C10.5596 13 10 13.5596 10 14.25C10 14.9404 10.5596 15.5 11.25 15.5C11.9404 15.5 12.5 14.9404 12.5 14.25C12.5 13.5596 11.9404 13 11.25 13Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarKey;
