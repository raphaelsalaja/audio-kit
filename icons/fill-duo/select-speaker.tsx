import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SelectSpeaker({
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
          d="M9 8.5C8.44821 8.5 8 8.94821 8 9.5C8 9.91421 7.66421 10.25 7.25 10.25C6.83579 10.25 6.5 9.91421 6.5 9.5C6.5 8.11979 7.61979 7 9 7C10.3802 7 11.5 8.11979 11.5 9.5C11.5 9.91421 11.1642 10.25 10.75 10.25C10.3358 10.25 10 9.91421 10 9.5C10 8.94821 9.55179 8.5 9 8.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.5 9.5C3.5 6.46279 5.96279 4 9 4C12.0372 4 14.5 6.46279 14.5 9.5C14.5 10.5077 14.2278 11.4535 13.754 12.2666C13.5455 12.6245 13.0863 12.7456 12.7284 12.537C12.3705 12.3285 12.2494 11.8693 12.458 11.5114C12.8022 10.9205 13 10.2343 13 9.5C13 7.29121 11.2088 5.5 9 5.5C6.79121 5.5 5 7.29121 5 9.5C5 10.2349 5.19705 10.9208 5.54163 11.5108C5.75053 11.8684 5.62993 12.3277 5.27225 12.5366C4.91457 12.7455 4.45527 12.6249 4.24637 12.2672C3.77095 11.4532 3.5 10.5071 3.5 9.5Z"
          fill={secondaryfill}
          fillOpacity="0.2"
          fillRule="evenodd"
        />
        <path
          d="M9 2.5C5.13421 2.5 2 5.63421 2 9.5C2 11.1816 2.59205 12.723 3.58027 13.9298C3.8427 14.2503 3.79564 14.7228 3.47516 14.9853C3.15469 15.2477 2.68215 15.2006 2.41973 14.8802C1.21995 13.415 0.5 11.5404 0.5 9.5C0.5 4.80579 4.30579 1 9 1C13.6942 1 17.5 4.80579 17.5 9.5C17.5 11.5404 16.78 13.415 15.5803 14.8802C15.3178 15.2006 14.8453 15.2477 14.5248 14.9853C14.2044 14.7228 14.1573 14.2503 14.4197 13.9298C15.408 12.723 16 11.1816 16 9.5C16 5.63421 12.8658 2.5 9 2.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.004 11.8641C9.47639 11.2483 8.52368 11.2483 7.99605 11.8641L5.4663 14.8162C4.73131 15.6733 5.33909 17 6.47001 17H11.53C12.6597 17 13.2691 15.675 12.5342 14.8167L10.004 11.8641Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SelectSpeaker;
