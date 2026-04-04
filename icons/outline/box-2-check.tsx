import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Box2Check({
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
          d="M4.25 9.25001V6.08301L11 3.08301"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.406 1.93101L14.75 4.75001L8.406 7.56901C8.147 7.68401 7.852 7.68401 7.594 7.56901L1.25 4.75001L7.594 1.93101C7.853 1.81601 8.148 1.81601 8.406 1.93101Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 7.795V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 4.75V12.6C1.25 12.995 1.483 13.353 1.844 13.514L7.594 16.07C7.723 16.127 7.862 16.156 8 16.156"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 7.65601V16.156"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 10C11.7939 10 10 11.7944 10 14C10 16.2056 11.7939 18 14 18C16.2061 18 18 16.2056 18 14C18 11.7944 16.2061 10 14 10ZM16.3076 13.252L14.0576 15.752C13.9199 15.9048 13.7256 15.9942 13.5195 15.9996C13.5127 16.0001 13.5068 16.0001 13.5 16.0001C13.3018 16.0001 13.1104 15.9215 12.9697 15.7804L11.7197 14.5304C11.4267 14.2374 11.4267 13.7628 11.7197 13.4699C12.0127 13.177 12.4873 13.1769 12.7802 13.4699L13.4716 14.1608L15.1923 12.2482C15.4706 11.9416 15.9433 11.9162 16.2519 12.1925C16.5595 12.4698 16.5849 12.9439 16.3076 13.252Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Box2Check;
