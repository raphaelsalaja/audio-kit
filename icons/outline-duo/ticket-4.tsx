import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ticket4({
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
          d="M14.25 3.75H8.25C8.25 4.578 7.578 5.25 6.75 5.25C5.922 5.25 5.25 4.578 5.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H5.25C5.25 13.422 5.922 12.75 6.75 12.75C7.578 12.75 8.25 13.422 8.25 14.25H14.25C15.355 14.25 16.25 13.354 16.25 12.25V5.75C16.25 4.646 15.355 3.75 14.25 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 8.313C7.16421 8.313 7.5 7.97722 7.5 7.563C7.5 7.14879 7.16421 6.813 6.75 6.813C6.33579 6.813 6 7.14879 6 7.563C6 7.97722 6.33579 8.313 6.75 8.313Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 11.187C7.16421 11.187 7.5 10.8512 7.5 10.437C7.5 10.0228 7.16421 9.687 6.75 9.687C6.33579 9.687 6 10.0228 6 10.437C6 10.8512 6.33579 11.187 6.75 11.187Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.25 3.75H8.25C8.25 4.578 7.578 5.25 6.75 5.25C5.922 5.25 5.25 4.578 5.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H5.25C5.25 13.422 5.922 12.75 6.75 12.75C7.578 12.75 8.25 13.422 8.25 14.25H14.25C15.355 14.25 16.25 13.354 16.25 12.25V5.75C16.25 4.646 15.355 3.75 14.25 3.75Z"
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

export default Ticket4;
