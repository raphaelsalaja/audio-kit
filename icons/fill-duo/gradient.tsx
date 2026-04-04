import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gradient({
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
          d="M3.25 2C2.28334 2 1.5 2.78393 1.5 3.75L1.5 6.25C1.5 7.21607 2.28334 8 3.25 8H14.75C15.7167 8 16.5 7.21607 16.5 6.25V3.75C16.5 2.78393 15.7167 2 14.75 2H3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.25 2C2.28334 2 1.5 2.78393 1.5 3.75V6.25C1.5 7.21607 2.28334 8 3.25 8H9V5H6.5V2H3.25Z"
          fill={fill}
        />
        <path
          d="M3.5 11C3.67302 11 3.83761 11.0778 3.95155 11.2134L5.35155 12.8801C5.44725 12.994 5.5 13.1403 5.5 13.2917V14.5417C5.5 15.3468 4.87297 16 4.1 16H2.9C2.12703 16 1.5 15.3468 1.5 14.5417V13.2917C1.5 13.1403 1.55275 12.994 1.64845 12.8801L3.04845 11.2134C3.16239 11.0778 3.32698 11 3.5 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.5 11C14.673 11 14.8376 11.0778 14.9515 11.2134L16.3515 12.8801C16.4472 12.994 16.5 13.1403 16.5 13.2917V14.5417C16.5 15.3468 15.873 16 15.1 16H13.9C13.127 16 12.5 15.3468 12.5 14.5417V13.2917C12.5 13.1403 12.5528 12.994 12.6485 12.8801L14.0485 11.2134C14.1624 11.0778 14.327 11 14.5 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path d="M11.5 2H9V5H11.5V2Z" fill={fill} />
        <path d="M14 5H11.5V8H14V5Z" fill={fill} />
      </g>
    </svg>
  );
}

export default Gradient;
