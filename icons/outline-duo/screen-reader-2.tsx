import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScreenReader2({
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
          d="M8.25 9.5H9.5L11.709 7.7882C11.5109 6.464 10.3794 5.5 9 5.5C7.4812 5.5 6.25 6.7312 6.25 8.25C6.25 8.856 6.45199 9.4111 6.78409 9.8657C7.22659 9.6396 7.72 9.5 8.25 9.5Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M11.4804 7.0811C11.0402 6.1492 10.0991 5.5 9 5.5C7.4812 5.5 6.25 6.7312 6.25 8.25C6.25 8.5884 6.31941 8.9084 6.43121 9.2078"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.199 7.8545C16.1546 7.6067 16.0839 7.363 15.9557 7.1367C15.0087 5.4648 12.7944 2.75 8.99999 2.75C5.20559 2.75 2.9912 5.4648 2.0443 7.1367C1.6519 7.8293 1.6519 8.6704 2.0443 9.3633C2.4983 10.1648 3.24738 11.2044 4.31868 12.0713"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 11.75H10.25L13.25 9.5V17L10.25 14.75H8.25C7.698 14.75 7.25 14.302 7.25 13.75V12.75C7.25 12.198 7.698 11.75 8.25 11.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M8.25 11.75H10.25L13.25 9.5V17L10.25 14.75H8.25C7.698 14.75 7.25 14.302 7.25 13.75V12.75C7.25 12.198 7.698 11.75 8.25 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 10.813C16.507 11.358 17 12.246 17 13.25C17 14.254 16.507 15.142 15.75 15.687"
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

export default ScreenReader2;
