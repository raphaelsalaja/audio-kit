import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartHistory({
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
          d="M9 7.25C9.41421 7.25 9.75 7.58579 9.75 8V12.25C9.75 12.6642 9.41421 13 9 13C8.58579 13 8.25 12.6642 8.25 12.25V8C8.25 7.58579 8.58579 7.25 9 7.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.75 9.5C6.16421 9.5 6.5 9.83579 6.5 10.25V12.25C6.5 12.6642 6.16421 13 5.75 13C5.33579 13 5 12.6642 5 12.25V10.25C5 9.83579 5.33579 9.5 5.75 9.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.25 5C12.6642 5 13 5.33579 13 5.75V12.25C13 12.6642 12.6642 13 12.25 13C11.8358 13 11.5 12.6642 11.5 12.25V5.75C11.5 5.33579 11.8358 5 12.25 5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.2584 6.99954C1.90195 6.9859 1.59571 6.71854 1.54506 6.35291L1.13707 3.40791C1.08023 2.99762 1.36676 2.61893 1.77705 2.56209C2.18735 2.50525 2.56604 2.79178 2.62288 3.20207L2.73662 4.02312C4.20162 2.18166 6.46213 1 9.00003 1C13.4182 1 17 4.58179 17 9C17 13.4182 13.4182 17 9.00003 17C5.05145 17 1.77228 14.1399 1.1185 10.3786C1.04757 9.97054 1.32089 9.58221 1.72899 9.51128C2.13708 9.44035 2.52541 9.71367 2.59634 10.1218C3.12737 13.1769 5.79321 15.5 9.00003 15.5C12.5898 15.5 15.5 12.5898 15.5 9C15.5 5.41021 12.5898 2.5 9.00003 2.5C6.78376 2.5 4.82574 3.60936 3.65227 5.30425L5.12926 5.10006C5.53957 5.04333 5.91817 5.32997 5.9749 5.74028C6.03162 6.15059 5.74498 6.5292 5.33467 6.58593L2.41672 6.98933C2.36485 6.99826 2.31179 7.00179 2.2584 6.99954Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartHistory;
