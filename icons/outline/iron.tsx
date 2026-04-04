import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Iron({
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
          d="M5 6.25L10.519 6.881C12.534 7.111 14.297 8.344 15.204 10.159L16.25 12.25H1.75C1.75 12.25 2.337 6.67001 2.537 4.77101C2.654 3.66001 3.658 2.861 4.767 2.995C6.376 3.19 7.985 3.385 9.594 3.58"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 15.25H16.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 10C7.1642 10 7.5 9.664 7.5 9.25C7.5 8.836 7.1642 8.5 6.75 8.5C6.3358 8.5 6 8.836 6 9.25C6 9.664 6.3358 10 6.75 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M9.75 10C10.1642 10 10.5 9.664 10.5 9.25C10.5 8.836 10.1642 8.5 9.75 8.5C9.3358 8.5 9 8.836 9 9.25C9 9.664 9.3358 10 9.75 10Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Iron;
