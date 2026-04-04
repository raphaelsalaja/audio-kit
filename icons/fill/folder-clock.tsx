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
          d="M7.8759 16C7.63324 15.3799 7.5 14.7053 7.5 14C7.5 10.9661 9.96535 8.5 13 8.5C14.3289 8.5 15.5487 8.97292 16.5 9.75935V6.24902C16.5 4.73302 15.267 3.49902 13.75 3.49902H8.724L8.346 3.02802C7.821 2.37402 7.039 1.99902 6.201 1.99902H4.25C2.733 1.99902 1.5 3.23302 1.5 4.74902V13.25C1.5 14.767 2.733 16 4.25 16H7.8759ZM3 4.75002V6.31402C3.377 6.12002 3.798 6.00002 4.25 6.00002H13.75C14.202 6.00002 14.623 6.12002 15 6.31402V6.25002C15 5.56102 14.439 5.00002 13.75 5.00002H8.364C8.136 5.00002 7.921 4.89602 7.779 4.71902L7.176 3.96702C6.938 3.67002 6.582 3.50002 6.201 3.50002H4.25C3.561 3.50002 3 4.06102 3 4.75002Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13 10C10.7939 10 9 11.7944 9 14C9 16.2056 10.7939 18 13 18C15.2061 18 17 16.2056 17 14C17 11.7944 15.2061 10 13 10ZM15.3125 14.9502C15.1934 15.2398 14.9141 15.415 14.6191 15.415C14.5234 15.415 14.4277 15.3969 14.3339 15.3588L12.7148 14.6938C12.4336 14.5781 12.25 14.3042 12.25 14V12.25C12.25 11.8359 12.5859 11.5 13 11.5C13.4141 11.5 13.75 11.8359 13.75 12.25V13.4971L14.9043 13.9712C15.2871 14.1284 15.4707 14.5669 15.3125 14.9502Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default FolderClock;
