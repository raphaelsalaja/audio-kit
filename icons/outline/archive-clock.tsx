import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveClock({
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
          d="M11.25 10.25V11.25C11.25 11.802 10.802 12.25 10.25 12.25H7.75C7.198 12.25 6.75 11.802 6.75 11.25V10.25H2.75V13.25C2.75 14.354 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.354 15.25 13.25V10.25H11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.8756 2.75H4.75C3.645 2.75 2.75 3.646 2.75 4.75V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 0C10.7939 0 9 1.7944 9 4C9 6.2056 10.7939 8 13 8C15.2061 8 17 6.2056 17 4C17 1.7944 15.2061 0 13 0ZM15.3125 4.9502C15.1934 5.2398 14.9141 5.415 14.6191 5.415C14.5234 5.415 14.4277 5.3969 14.3339 5.3588L12.7148 4.6938C12.4336 4.5781 12.25 4.3042 12.25 4V2.25C12.25 1.8359 12.5859 1.5 13 1.5C13.4141 1.5 13.75 1.8359 13.75 2.25V3.4971L14.9043 3.9712C15.2871 4.1284 15.4707 4.5669 15.3125 4.9502Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ArchiveClock;
