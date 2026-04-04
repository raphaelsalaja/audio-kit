import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayersStacked({
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
          d="M5.20286 2.23704C5.34465 2.08581 5.54271 2 5.75002 2H16C16.299 2 16.5694 2.17754 16.6882 2.45185C16.8071 2.72617 16.7516 3.04486 16.5472 3.26296L12.7972 7.26296C12.6554 7.41419 12.4573 7.5 12.25 7.5H2.00002C1.70107 7.5 1.43067 7.32246 1.31182 7.04815C1.19298 6.77383 1.2484 6.45514 1.45286 6.23704L5.20286 2.23704Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.513 6.45285C16.8152 6.73615 16.8305 7.21077 16.5472 7.51296L12.7972 11.513C12.6554 11.6642 12.4573 11.75 12.25 11.75H2.00002C1.70107 11.75 1.43066 11.5725 1.31182 11.2981C1.19298 11.0238 1.2484 10.7051 1.45287 10.487L2.62477 9.23704C2.76655 9.08581 2.96461 9 3.17192 9H12.2305C12.7833 9 13.3115 8.77119 13.6896 8.36788L15.4529 6.48705C15.7362 6.18486 16.2108 6.16955 16.513 6.45285Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M16.513 10.7028C16.8152 10.9861 16.8305 11.4608 16.5472 11.763L12.7972 15.763C12.6554 15.9142 12.4573 16 12.25 16H2.00002C1.70107 16 1.43066 15.8225 1.31182 15.5481C1.19298 15.2738 1.2484 14.9551 1.45287 14.737L2.62477 13.487C2.76655 13.3358 2.96461 13.25 3.17192 13.25H12.2305C12.7833 13.25 13.3115 13.0212 13.6896 12.6179L15.4529 10.737C15.7362 10.4349 16.2108 10.4196 16.513 10.7028Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LayersStacked;
