import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderClock({
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
          d="M13 10C10.7939 10 9 11.7944 9 14C9 16.2056 10.7939 18 13 18C15.2061 18 17 16.2056 17 14C17 11.7944 15.2061 10 13 10ZM15.3125 14.9502C15.1934 15.2398 14.9141 15.415 14.6191 15.415C14.5234 15.415 14.4277 15.3969 14.3339 15.3588L12.7148 14.6938C12.4336 14.5781 12.25 14.3042 12.25 14V12.25C12.25 11.8359 12.5859 11.5 13 11.5C13.4141 11.5 13.75 11.8359 13.75 12.25V13.4971L14.9043 13.9712C15.2871 14.1284 15.4707 14.5669 15.3125 14.9502Z"
          fill={fill}
        />
        <path
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H7.87589C7.63324 15.3799 7.5 14.7053 7.5 14C7.5 10.9661 9.96535 8.5 13 8.5C14.3289 8.5 15.5487 8.97292 16.5 9.75935V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderClock;
