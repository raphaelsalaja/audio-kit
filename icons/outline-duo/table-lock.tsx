import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableLock({
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
          d="M2.75 4.75C2.75 3.65 3.645 2.75 4.75 2.75H13.25C14.355 2.75 15.25 3.65 15.25 4.75V6.75H2.75V4.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 12.75H11.25C10.698 12.75 10.25 13.2 10.25 13.75V15.25C10.25 15.8 10.698 16.25 11.25 16.25H15.25C15.802 16.25 16.25 15.8 16.25 15.25V13.75C16.25 13.2 15.802 12.75 15.25 12.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 12.75H11.25C10.698 12.75 10.25 13.2 10.25 13.75V15.25C10.25 15.8 10.698 16.25 11.25 16.25H15.25C15.802 16.25 16.25 15.8 16.25 15.25V13.75C16.25 13.2 15.802 12.75 15.25 12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 12.75V11.25C11.75 10.42 12.422 9.75 13.25 9.75C14.078 9.75 14.75 10.42 14.75 11.25V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 2.75V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 6.75H2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 6.75V4.75C15.25 3.65 14.355 2.75 13.25 2.75H4.75C3.645 2.75 2.75 3.65 2.75 4.75V13.25C2.75 14.35 3.645 15.25 4.75 15.25H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default TableLock;
