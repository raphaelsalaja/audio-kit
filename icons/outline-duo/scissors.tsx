import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Scissors({
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
          d="M4 7.75C5.243 7.75 6.25 6.743 6.25 5.5C6.25 4.257 5.243 3.25 4 3.25C2.757 3.25 1.75 4.257 1.75 5.5C1.75 6.743 2.757 7.75 4 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7 15.5C8.243 15.5 9.25 14.493 9.25 13.25C9.25 12.007 8.243 11 7 11C5.757 11 4.75 12.007 4.75 13.25C4.75 14.493 5.757 15.5 7 15.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.5135 7.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 7.75H9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 7.75C5.243 7.75 6.25 6.743 6.25 5.5C6.25 4.257 5.243 3.25 4 3.25C2.757 3.25 1.75 4.257 1.75 5.5C1.75 6.743 2.757 7.75 4 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.409 11.659L14 3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 15.5C8.243 15.5 9.25 14.493 9.25 13.25C9.25 12.007 8.243 11 7 11C5.757 11 4.75 12.007 4.75 13.25C4.75 14.493 5.757 15.5 7 15.5Z"
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

export default Scissors;
