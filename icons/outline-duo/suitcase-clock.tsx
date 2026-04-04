import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseClock({
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
          d="M8.5 13C8.5 9.9673 10.9678 7.5 14 7.5C14.7061 7.5 15.3792 7.63868 16 7.88208V6.75C16 5.645 15.105 4.75 14 4.75H3.75C2.645 4.75 1.75 5.645 1.75 6.75V13C1.75 14.105 2.645 15 3.75 15H8.88211C8.63861 14.3792 8.5 13.7061 8.5 13Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.17578V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H8.14099"
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

export default SuitcaseClock;
