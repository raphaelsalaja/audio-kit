import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsSpin({
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
          d="M9 15.25C12.452 15.25 15.25 12.452 15.25 9C15.25 5.548 12.452 2.75 9 2.75C5.548 2.75 2.75 5.548 2.75 9C2.75 12.452 5.548 15.25 9 15.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M8.75 1L10.75 3L8.75 5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.19699 13.217L2.92899 10.484L5.661 11.217"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.053 12.783L13.321 13.516L12.589 10.783"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.722 2.98999C10.175 2.83399 9.59699 2.75 8.99999 2.75C6.06949 2.75 3.60989 4.76712 2.93399 7.48792"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.93399 10.514C3.07199 11.066 3.28899 11.608 3.58699 12.125C5.05149 14.6618 8.02529 15.7837 10.7193 15.01"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.344 13.496C13.753 13.1 14.114 12.642 14.413 12.125C15.8775 9.5882 15.3616 6.45211 13.3456 4.50531"
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

export default ArrowsSpin;
