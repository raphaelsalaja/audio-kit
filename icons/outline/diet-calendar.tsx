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
          d="M15.908 11.624C14.996 10.9 13.97 11.496 13.103 11.496C12.236 11.496 11.314 10.864 10.298 11.624C9.28198 12.384 9.18398 14.302 10.312 16.081C11.395 17.789 12.487 17.119 13.104 17.119C13.721 17.119 14.813 17.79 15.896 16.081C17.023 14.302 16.747 12.287 15.908 11.624Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.667 8C14.851 8 15 8.149 15 8.333C15 9.253 14.253 10 13.333 10C13.149 10 13 9.851 13 9.667C13 8.747 13.747 8 14.667 8Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M6.7232 15.25H3.75C2.645 15.25 1.75 14.355 1.75 13.25V4.75C1.75 3.645 2.645 2.75 3.75 2.75H13.25C14.355 2.75 15.25 3.645 15.25 4.75V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 2.75V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 2.75V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 6.25H15.25"
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

export default DietCalendar;
