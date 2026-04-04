import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VirtualSpace({
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
          d="M12.239 7.01894C14.6171 6.64931 16.25 5.88534 16.25 5.00286C16.25 3.75864 13.0041 2.75 9 2.75C4.99594 2.75 1.75 3.75864 1.75 5.00286C1.75 5.88481 3.38092 6.64839 5.75672 7.01828V11.024C6.96047 10.8146 9.94217 10.5126 12.239 10.9791V7.01894Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.253 10.989C11.275 10.836 10.17 10.75 9 10.75C7.83 10.75 6.726 10.836 5.747 10.989"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 5C16.25 3.757 13.004 2.75 9 2.75C4.996 2.75 1.75 3.757 1.75 5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 5V13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 5V13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 5C1.75 5.88 3.378 6.642 5.75 7.012L5.748 15.012C3.377 14.642 1.75 13.88 1.75 13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 13C16.25 13.88 14.623 14.642 12.252 15.012L12.25 7.012C14.622 6.642 16.25 5.88 16.25 5"
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

export default VirtualSpace;
