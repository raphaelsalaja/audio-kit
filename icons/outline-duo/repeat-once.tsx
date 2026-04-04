import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RepeatOnce({
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
          d="M2.25 6C2.25 4.9 3.1454 4 4.25 4H13.75C14.8546 4 15.75 4.9 15.75 6V12C15.75 13.1 14.8546 14 13.75 14H4.25C3.1454 14 2.25 13.1 2.25 12V6Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9.25 7.25V1.75C9.25 1.75 8.62 2.85999 7.283 3.10999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 11.25L8.008 13.74L10.5 16.24"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 4.25H13.75C14.855 4.25 15.75 5.14 15.75 6.25V11.75C15.75 12.86 14.855 13.75 13.75 13.75H8.008"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 13.75H4.25C3.145 13.75 2.25 12.86 2.25 11.75V6.25C2.25 5.14 3.145 4.25 4.25 4.25H4.5085"
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

export default RepeatOnce;
