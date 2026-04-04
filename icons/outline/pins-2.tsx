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
          d="M9 10.75C9.9665 10.75 10.75 9.96031 10.75 8.98721C10.75 8.01411 9.9665 7.2244 9 7.2244C8.0335 7.2244 7.25 8.01411 7.25 8.98721C7.25 9.96031 8.0335 10.75 9 10.75Z"
          fill="none"
          stroke={secondaryfill}
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
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.2572 6.12839C1.2563 6.08809 1.25 6.04911 1.25 6.00851C1.25 3.38181 3.3766 1.25 6 1.25C6.0499 1.25 6.0961 1.26319 6.1457 1.26459"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Pins2;
