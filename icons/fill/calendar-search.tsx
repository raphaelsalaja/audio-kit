import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarSearch({
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
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H8.57012C8.98412 16 9.32012 15.664 9.32012 15.25C9.32012 14.836 8.98412 14.5 8.57012 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V8.77471C15 9.18871 15.336 9.52471 15.75 9.52471C16.164 9.52471 16.5 9.18871 16.5 8.77471V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
        <path
          d="M13.5 10.5C11.8432 10.5 10.5 11.8432 10.5 13.5C10.5 15.1568 11.8432 16.5 13.5 16.5C14.0563 16.5 14.5773 16.3485 15.024 16.0846L16.2197 17.2803C16.5126 17.5732 16.9874 17.5732 17.2803 17.2803C17.5732 16.9874 17.5732 16.5126 17.2803 16.2197L16.0846 15.024C16.3485 14.5773 16.5 14.0563 16.5 13.5C16.5 11.8432 15.1568 10.5 13.5 10.5ZM12 13.5C12 12.6716 12.6716 12 13.5 12C14.3284 12 15 12.6716 15 13.5C15 14.3284 14.3284 15 13.5 15C12.6716 15 12 14.3284 12 13.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarSearch;
