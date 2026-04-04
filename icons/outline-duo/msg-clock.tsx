import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgClock({
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
          d="M9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.319 2.108 11.552 2.723 12.617C3.153 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.872 15.559 6.647 15.933 7.662 16.125C7.73609 16.139 9.0134 16.3604 8.86001 15.9589C8.62743 15.3502 8.5 14.6898 8.5 14C8.5 10.9661 10.9654 8.5 14 8.5C14.687 8.5 15.3449 8.6264 15.9515 8.85717C16.293 8.85717 16.2495 8.80101 16.2403 8.62179C16.0436 4.79358 12.8771 1.75 9 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.1913 8.14661C15.7691 4.54541 12.7151 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.319 2.10801 11.552 2.72301 12.617C3.15301 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.872 15.559 6.647 15.933 7.662 16.125C7.8219 16.1553 7.9843 16.1786 8.1485 16.1963"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 10C11.7939 10 10 11.7944 10 14C10 16.2056 11.7939 18 14 18C16.2061 18 18 16.2056 18 14C18 11.7944 16.2061 10 14 10ZM16.3125 14.9502C16.1934 15.2398 15.9141 15.415 15.6191 15.415C15.5234 15.415 15.4277 15.3969 15.3339 15.3588L13.7148 14.6938C13.4336 14.5781 13.25 14.3042 13.25 14V12.25C13.25 11.8359 13.5859 11.5 14 11.5C14.4141 11.5 14.75 11.8359 14.75 12.25V13.4971L15.9043 13.9712C16.2871 14.1284 16.4707 14.5669 16.3125 14.9502Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MsgClock;
