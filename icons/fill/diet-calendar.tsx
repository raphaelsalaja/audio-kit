import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DietCalendar({
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
          d="M16.375 11.038C15.47 10.318 14.496 10.509 13.783 10.65C13.288 10.747 12.94 10.752 12.452 10.645C11.766 10.495 10.828 10.291 9.848 11.024C8.444 12.074 8.369 14.421 9.677 16.484C10.819 18.282 12.173 18.032 12.823 17.912C13.032 17.874 13.175 17.874 13.382 17.912C13.579 17.949 13.841 17.997 14.141 17.997C14.833 17.997 15.734 17.739 16.53 16.483C17.873 14.362 17.534 11.957 16.375 11.038Z"
          fill={secondaryfill}
        />
        <path
          d="M14.667 8C14.851 8 15 8.149 15 8.333C15 9.253 14.253 10 13.333 10C13.149 10 13 9.851 13 9.667C13 8.747 13.747 8 14.667 8Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25 2H12.5V0.75C12.5 0.336 12.164 0 11.75 0C11.336 0 11 0.336 11 0.75V2H6V0.75C6 0.336 5.664 0 5.25 0C4.836 0 4.5 0.336 4.5 0.75V2H3.75C2.233 2 1 3.233 1 4.75V13.25C1 14.767 2.233 16 3.75 16H6.72266C7.13666 16 7.47266 15.664 7.47266 15.25C7.47266 14.836 7.13666 14.5 6.72266 14.5H3.75C3.061 14.5 2.5 13.939 2.5 13.25V7H15.25C15.664 7 16 6.664 16 6.25V4.75C16 3.233 14.767 2 13.25 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DietCalendar;
