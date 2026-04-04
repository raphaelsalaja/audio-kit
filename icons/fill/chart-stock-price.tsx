import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartStockPrice({
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
          d="M4.25 2.5H11.5V5.93934L8 9.43934L6.03033 7.46967C5.88968 7.32902 5.69891 7.25 5.5 7.25C5.30109 7.25 5.11032 7.32902 4.96967 7.46967L1.5 10.9393V5.25C1.5 3.73069 2.73128 2.5 4.25 2.5Z"
          fill={fill}
        />
        <path
          d="M13 15.5H13.75C15.2687 15.5 16.5 14.2693 16.5 12.75V5.25C16.5 3.73069 15.2687 2.5 13.75 2.5H13V15.5Z"
          fill={secondaryfill}
        />
        <path
          d="M1.51562 13.045C1.66279 14.4255 2.83091 15.5 4.24999 15.5H11.5V8.06066L8.53032 11.0303C8.23743 11.3232 7.76256 11.3232 7.46966 11.0303L5.49999 9.06066L1.51562 13.045Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChartStockPrice;
