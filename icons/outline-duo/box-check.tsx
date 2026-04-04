import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxCheck({
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
          d="M4.75 5.25H13.25C14.3546 5.25 15.25 6.14543 15.25 7.25C15.25 7.45517 15.4087 8.67075 15.0692 8.60385C14.7233 8.53572 14.3658 8.5 14 8.5C10.9624 8.5 8.5 10.9624 8.5 14C8.5 14.3706 8.53666 14.7326 8.60654 15.0827C8.65901 15.3455 5.16745 15.25 4.75 15.25C3.64543 15.25 2.75 14.3546 2.75 13.25V7.25C2.75 6.14543 3.64543 5.25 4.75 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 2.25V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3 6.284L4.449 3.362C4.787 2.681 5.481 2.25 6.241 2.25H11.759C12.519 2.25 13.213 2.681 13.551 3.362L15 6.285"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 7.876V7.25C15.25 6.146 14.355 5.25 13.25 5.25H4.75C3.645 5.25 2.75 6.146 2.75 7.25V13.25C2.75 14.354 3.645 15.25 4.75 15.25H7.876"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 10C11.7939 10 10 11.7944 10 14C10 16.2056 11.7939 18 14 18C16.2061 18 18 16.2056 18 14C18 11.7944 16.2061 10 14 10ZM16.3076 13.252L14.0576 15.752C13.9199 15.9048 13.7256 15.9942 13.5195 15.9996C13.5127 16.0001 13.5068 16.0001 13.5 16.0001C13.3018 16.0001 13.1104 15.9215 12.9697 15.7804L11.7197 14.5304C11.4267 14.2374 11.4267 13.7628 11.7197 13.4699C12.0127 13.177 12.4873 13.1769 12.7802 13.4699L13.4716 14.1608L15.1923 12.2482C15.4706 11.9416 15.9433 11.9162 16.2519 12.1925C16.5595 12.4698 16.5849 12.9439 16.3076 13.252Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BoxCheck;
