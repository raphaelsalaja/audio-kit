import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockKey({
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
          d="M12.25 8.25C13.3546 8.25 14.25 9.14543 14.25 10.25L13.7988 11.5537C13.051 10.8984 12.0724 10.5 11 10.5C8.65281 10.5 6.75 12.4027 6.75 14.75C6.75 15.1854 6.81585 15.6054 6.9375 16.001L4.75 16.25C3.64543 16.25 2.75 15.3546 2.75 14.25V10.25C2.75 9.14543 3.64543 8.25 4.75 8.25H12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 8.25V5C5.25 3.205 6.705 1.75 8.5 1.75C10.295 1.75 11.75 3.205 11.75 5V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 16.75C12.1046 16.75 13 15.8546 13 14.75C13 13.6454 12.1046 12.75 11 12.75C9.89543 12.75 9 13.6454 9 14.75C9 15.8546 9.89543 16.75 11 16.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 14.75H17"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 10.9785V10.25C14.25 9.145 13.355 8.25 12.25 8.25H4.75C3.645 8.25 2.75 9.145 2.75 10.25V14.25C2.75 15.355 3.645 16.25 4.75 16.25H6.25529"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.5 14.75V16.25"
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

export default LockKey;
