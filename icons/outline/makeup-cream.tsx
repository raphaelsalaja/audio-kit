import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MakeupCream({
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
          d="M1.75 11.5C1.75 12.743 4.101 13.75 7 13.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.234 7.22799C11.461 7.63999 12.25 8.28099 12.25 8.99999C12.25 10.243 9.899 11.25 7 11.25C4.101 11.25 1.75 10.243 1.75 8.99999C1.75 8.27919 2.54091 7.63769 3.77151 7.22549"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 9V14C1.75 15.243 4.101 16.25 7 16.25C9.899 16.25 12.25 15.243 12.25 14V9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.014 8.25C10.163 8.043 10.263 7.796 10.264 7.549C10.264 6.774 9.651 6.146 8.896 6.146H7.357C6.546 6.146 5.846 5.564 5.681 4.75C5.221 4.78 4.785 4.969 4.443 5.285C3.602 6.061 3.50802 7.388 4.26502 8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 10.0751C15.878 9.2111 16.25 8.1503 16.25 7C16.25 4.101 13.899 1.75 11 1.75C9.8473 1.75 8.791 2.13 7.9303 2.7643"
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

export default MakeupCream;
