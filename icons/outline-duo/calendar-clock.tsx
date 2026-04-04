import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarClock({
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
          d="M2.25 4.75C2.25 3.64543 3.14543 2.75 4.25 2.75H13.75C14.8546 2.75 15.75 3.64543 15.75 4.75V6.25H2.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 2.75V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 2.75V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 6.25H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 8.00391V4.75C15.75 3.646 14.855 2.75 13.75 2.75H4.25C3.145 2.75 2.25 3.646 2.25 4.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H7.87601"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 9.5C11.7939 9.5 10 11.2944 10 13.5C10 15.7056 11.7939 17.5 14 17.5C16.2061 17.5 18 15.7056 18 13.5C18 11.2944 16.2061 9.5 14 9.5ZM16.3125 14.4502C16.1934 14.7398 15.9141 14.915 15.6191 14.915C15.5234 14.915 15.4277 14.8969 15.3339 14.8588L13.7148 14.1938C13.4336 14.0781 13.25 13.8042 13.25 13.5V11.75C13.25 11.3359 13.5859 11 14 11C14.4141 11 14.75 11.3359 14.75 11.75V12.9971L15.9043 13.4712C16.2871 13.6284 16.4707 14.0669 16.3125 14.4502Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CalendarClock;
