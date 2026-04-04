import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function _InfinityIcon({
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
          d="M16.75 9C16.75 10.7951 15.3622 12.25 13.65 12.25C10.0333 12.25 7.9667 5.75 4.35 5.75C2.6378 5.75 1.25 7.2049 1.25 9C1.25 10.7951 2.6378 12.25 4.35 12.25C7.9667 12.25 10.0333 5.75 13.65 5.75C15.3622 5.75 16.75 7.2049 16.75 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.907 6.8364C6.1229 6.1881 5.2887 5.75 4.35 5.75C2.6378 5.75 1.25 7.205 1.25 9C1.25 10.795 2.6378 12.25 4.35 12.25C7.9667 12.25 10.0333 5.75 13.65 5.75C15.3622 5.75 16.75 7.205 16.75 9C16.75 10.795 15.3622 12.25 13.65 12.25C12.7113 12.25 11.877 11.8119 11.093 11.1636"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.35004 12.25C7.96674 12.25 10.0333 5.75 13.65 5.75"
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

export default Infinity;
