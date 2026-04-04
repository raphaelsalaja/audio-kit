import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilterOff({
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
          d="M7 14.182V16.25C7 16.515 7.14 16.761 7.368 16.896C7.486 16.966 7.618 17 7.75 17C7.875 17 7.999 16.969 8.111 16.907L10.611 15.532C10.851 15.4 11 15.148 11 14.875V10.182L7 14.182Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.99999 9.602V11L15.778 2.222C15.64 2.084 15.452 2 15.25 2H2.74999C2.46499 2 2.20499 2.161 2.07899 2.416C1.95199 2.671 1.98099 2.976 2.15299 3.203L6.99999 9.602Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1.99999 16.75C1.80799 16.75 1.61599 16.677 1.46999 16.53C1.17699 16.237 1.17699 15.762 1.46999 15.469L15.72 1.21999C16.013 0.926994 16.488 0.926994 16.781 1.21999C17.074 1.51299 17.074 1.98799 16.781 2.28099L2.52999 16.53C2.38399 16.676 2.19199 16.75 1.99999 16.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FilterOff;
