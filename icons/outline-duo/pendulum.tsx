import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pendulum({
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
          d="M9 15.25C9.966 15.25 10.75 14.4665 10.75 13.5C10.75 12.5335 9.966 11.75 9 11.75C8.034 11.75 7.25 12.5335 7.25 13.5C7.25 14.4665 8.034 15.25 9 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 15.25C4.716 15.25 5.5 14.4665 5.5 13.5C5.5 12.5335 4.716 11.75 3.75 11.75C2.784 11.75 2 12.5335 2 13.5C2 14.4665 2.784 15.25 3.75 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M17.2278 12.9737C17.0753 12.0193 16.1776 11.3693 15.2237 11.5217C14.2698 11.6741 13.6192 12.5715 13.7717 13.5258C13.9242 14.4801 14.8219 15.1302 15.7758 14.9778C16.7297 14.8254 17.3803 13.928 17.2278 12.9737Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 11.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 2.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 11.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 15.25C9.966 15.25 10.75 14.4665 10.75 13.5C10.75 12.5335 9.966 11.75 9 11.75C8.034 11.75 7.25 12.5335 7.25 13.5C7.25 14.4665 8.034 15.25 9 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 15.25C4.716 15.25 5.5 14.4665 5.5 13.5C5.5 12.5335 4.716 11.75 3.75 11.75C2.784 11.75 2 12.5335 2 13.5C2 14.4665 2.784 15.25 3.75 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 5.75L15.1794 11.5235"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.2278 12.9737C17.0753 12.0193 16.1776 11.3693 15.2237 11.5217C14.2698 11.6741 13.6192 12.5715 13.7717 13.5258C13.9242 14.4801 14.8219 15.1302 15.7758 14.9778C16.7297 14.8254 17.3803 13.928 17.2278 12.9737Z"
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

export default Pendulum;
