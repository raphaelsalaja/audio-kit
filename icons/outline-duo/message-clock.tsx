import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageClock({
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
          d="M14.25 2.25H3.75C2.645 2.25 1.75 3.146 1.75 4.25V11.25C1.75 12.354 2.645 13.25 3.75 13.25H5.75V16.25L8.66162 14.327C8.55604 13.9019 8.5 13.4574 8.5 13C8.5 9.96243 10.9624 7.5 14 7.5C14.0512 7.5 14.1022 7.5007 14.153 7.50209C14.7962 7.51965 15.4118 7.64764 15.9816 7.86777C16.1285 7.92454 16.25 7.75421 16.25 7.59669V4.25C16.25 3.146 15.355 2.25 14.25 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 7.16901V4.25C16.25 3.146 15.355 2.25 14.25 2.25H3.75C2.645 2.25 1.75 3.146 1.75 4.25V11.25C1.75 12.354 2.645 13.25 3.75 13.25H5.75V16.25L7.93289 14.5033"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 9C11.7939 9 10 10.7944 10 13C10 15.2056 11.7939 17 14 17C16.2061 17 18 15.2056 18 13C18 10.7944 16.2061 9 14 9ZM16.3125 13.9502C16.1934 14.2398 15.9141 14.415 15.6191 14.415C15.5234 14.415 15.4277 14.3969 15.3339 14.3588L13.7148 13.6938C13.4336 13.5781 13.25 13.3042 13.25 13V11.25C13.25 10.8359 13.5859 10.5 14 10.5C14.4141 10.5 14.75 10.8359 14.75 11.25V12.4971L15.9043 12.9712C16.2871 13.1284 16.4707 13.5669 16.3125 13.9502Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MessageClock;
