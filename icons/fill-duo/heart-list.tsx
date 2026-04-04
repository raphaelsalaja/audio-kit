import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartList({
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
          d="M16.25 15H11.25C10.8359 15 10.5 14.6641 10.5 14.25C10.5 13.8359 10.8359 13.5 11.25 13.5H16.25C16.6641 13.5 17 13.8359 17 14.25C17 14.6641 16.6641 15 16.25 15Z"
          fill={fill}
        />
        <path
          d="M9.00001 14.25C9.00001 13.5396 9.33751 12.9126 9.85331 12.5C9.33751 12.0874 9.00001 11.4604 9.00001 10.75C9.00001 9.5093 10.0093 8.5 11.25 8.5H16.25C16.3372 8.5 16.4199 8.5161 16.5045 8.5256C16.6598 7.9216 16.749 7.2844 16.749 6.6118C16.7588 4.0845 14.708 2.0156 12.1631 2C10.9678 2.0151 9.83991 2.4902 9.00001 3.3057C8.15921 2.4903 7.02832 2.0152 5.82232 2C3.29202 2.0156 1.24121 4.0845 1.25101 6.6089C1.25101 11.8604 6.55671 15.0381 8.18261 15.8872C8.43851 16.0205 8.71871 16.0874 8.99901 16.0874C9.25611 16.0874 9.51022 16.0244 9.74782 15.9131C9.29212 15.501 9.00001 14.9114 9.00001 14.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.25 11.5H11.25C10.8359 11.5 10.5 11.1641 10.5 10.75C10.5 10.3359 10.8359 10 11.25 10H16.25C16.6641 10 17 10.3359 17 10.75C17 11.1641 16.6641 11.5 16.25 11.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HeartList;
