import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AxisDottedY({
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
          d="M10.225 4.237L7.75002 1.763L5.27502 4.237"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 10.75V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 11.5C17.1642 11.5 17.5 11.1642 17.5 10.75C17.5 10.3358 17.1642 10 16.75 10C16.3358 10 16 10.3358 16 10.75C16 11.1642 16.3358 11.5 16.75 11.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 17.5C2.16421 17.5 2.5 17.1642 2.5 16.75C2.5 16.3358 2.16421 16 1.75 16C1.33579 16 1 16.3358 1 16.75C1 17.1642 1.33579 17.5 1.75 17.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.75 11.5C14.1642 11.5 14.5 11.1642 14.5 10.75C14.5 10.3358 14.1642 10 13.75 10C13.3358 10 13 10.3358 13 10.75C13 11.1642 13.3358 11.5 13.75 11.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.75 11.5C11.1642 11.5 11.5 11.1642 11.5 10.75C11.5 10.3358 11.1642 10 10.75 10C10.3358 10 10 10.3358 10 10.75C10 11.1642 10.3358 11.5 10.75 11.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.75 15.5C4.16421 15.5 4.5 15.1642 4.5 14.75C4.5 14.3358 4.16421 14 3.75 14C3.33579 14 3 14.3358 3 14.75C3 15.1642 3.33579 15.5 3.75 15.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.75 13.5C6.16421 13.5 6.5 13.1642 6.5 12.75C6.5 12.3358 6.16421 12 5.75 12C5.33579 12 5 12.3358 5 12.75C5 13.1642 5.33579 13.5 5.75 13.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default AxisDottedY;
