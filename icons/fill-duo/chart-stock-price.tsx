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
          d="M13.75 2.5H4.25C2.73122 2.5 1.5 3.73122 1.5 5.25V12.75C1.5 14.2688 2.73122 15.5 4.25 15.5H13.75C15.2688 15.5 16.5 14.2688 16.5 12.75V5.25C16.5 3.73122 15.2688 2.5 13.75 2.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path d="M13 2.5H11.5V15.5H13V2.5Z" fill={fill} />
        <path
          d="M2.24999 12.25C2.05809 12.25 1.86619 12.1768 1.71969 12.0303C1.42669 11.7373 1.42669 11.2627 1.71969 10.9698L4.96969 7.71981C5.26269 7.42681 5.73728 7.42681 6.03018 7.71981L7.99989 9.68951L11.7196 5.96981C12.0126 5.67681 12.4872 5.67681 12.7801 5.96981C13.073 6.26281 13.0731 6.7374 12.7801 7.0303L8.53008 11.2803C8.23708 11.5733 7.76248 11.5733 7.46958 11.2803L5.49989 9.31061L2.78018 12.0303C2.63368 12.1768 2.44189 12.25 2.24999 12.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChartStockPrice;
