import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pins2({
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
          d="M9 3.75C11.8995 3.75 14.25 6.06765 14.25 8.92285C14.2497 12.8019 10.3853 15.819 9 16.25C7.61466 15.819 3.75031 12.8019 3.75 8.92285C3.75 6.06765 6.1005 3.75 9 3.75ZM9 7.22461C8.0335 7.22461 7.25 8.0142 7.25 8.9873C7.25004 9.96037 8.03352 10.75 9 10.75C9.96648 10.75 10.75 9.96037 10.75 8.9873C10.75 8.0142 9.9665 7.22461 9 7.22461Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 10.75C9.9665 10.75 10.75 9.96034 10.75 8.98724C10.75 8.01414 9.9665 7.22443 9 7.22443C8.0335 7.22443 7.25 8.01414 7.25 8.98724C7.25 9.96034 8.0335 10.75 9 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C10.3854 15.819 14.25 12.8017 14.25 8.92239C14.25 6.06719 11.8995 3.75 9 3.75C6.1005 3.75 3.75 6.06719 3.75 8.92239C3.75 12.8017 7.6146 15.819 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.7428 6.12839C16.7437 6.08809 16.75 6.04911 16.75 6.00851C16.75 3.38181 14.6234 1.25 12 1.25C11.9501 1.25 11.9039 1.26319 11.8543 1.26459"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.2572 6.12839C1.2563 6.08809 1.25 6.04911 1.25 6.00851C1.25 3.38181 3.3766 1.25 6 1.25C6.0499 1.25 6.0961 1.26319 6.1457 1.26459"
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

export default Pins2;
