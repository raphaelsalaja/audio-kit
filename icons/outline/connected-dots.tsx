import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ConnectedDots({
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
          d="M9 6.75V9.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.84302 12.21L9.00002 9.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.157 12.21L9 9.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.75C10.2426 6.75 11.25 5.743 11.25 4.5C11.25 3.257 10.2426 2.25 9 2.25C7.7574 2.25 6.75 3.257 6.75 4.5C6.75 5.743 7.7574 6.75 9 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 15.75C15.2426 15.75 16.25 14.743 16.25 13.5C16.25 12.257 15.2426 11.25 14 11.25C12.7574 11.25 11.75 12.257 11.75 13.5C11.75 14.743 12.7574 15.75 14 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 15.75C5.2426 15.75 6.25 14.743 6.25 13.5C6.25 12.257 5.2426 11.25 4 11.25C2.7574 11.25 1.75 12.257 1.75 13.5C1.75 14.743 2.7574 15.75 4 15.75Z"
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

export default ConnectedDots;
