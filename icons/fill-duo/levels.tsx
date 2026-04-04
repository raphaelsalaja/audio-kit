import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Levels({
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
          d="M3.25 3C3.66421 3 4 3.33579 4 3.75V9.25C4 9.66421 3.66421 10 3.25 10C2.83579 10 2.5 9.66421 2.5 9.25V3.75C2.5 3.33579 2.83579 3 3.25 3Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.25 1C15.6642 1 16 1.33579 16 1.75V9.25C16 9.66421 15.6642 10 15.25 10C14.8358 10 14.5 9.66421 14.5 9.25V1.75C14.5 1.33579 14.8358 1 15.25 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.25 2C12.6642 2 13 2.33579 13 2.75V9.25C13 9.66421 12.6642 10 12.25 10C11.8358 10 11.5 9.66421 11.5 9.25V2.75C11.5 2.33579 11.8358 2 12.25 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.25 5C9.66421 5 10 5.33579 10 5.75V9.25C10 9.66421 9.66421 10 9.25 10C8.83579 10 8.5 9.66421 8.5 9.25V5.75C8.5 5.33579 8.83579 5 9.25 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.25 1C6.66421 1 7 1.33579 7 1.75V9.25C7 9.66421 6.66421 10 6.25 10C5.83579 10 5.5 9.66421 5.5 9.25V1.75C5.5 1.33579 5.83579 1 6.25 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.5 12C3.67302 12 3.83761 12.0778 3.95155 12.2134L5.35155 13.8801C5.44725 13.994 5.5 14.1403 5.5 14.2917V15.5417C5.5 16.3468 4.87297 17 4.1 17H2.9C2.12703 17 1.5 16.3468 1.5 15.5417V14.2917C1.5 14.1403 1.55275 13.994 1.64845 13.8801L3.04845 12.2134C3.16239 12.0778 3.32698 12 3.5 12Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.5 12C14.673 12 14.8376 12.0778 14.9515 12.2134L16.3515 13.8801C16.4472 13.994 16.5 14.1403 16.5 14.2917V15.5417C16.5 16.3468 15.873 17 15.1 17H13.9C13.127 17 12.5 16.3468 12.5 15.5417V14.2917C12.5 14.1403 12.5528 13.994 12.6485 13.8801L14.0485 12.2134C14.1624 12.0778 14.327 12 14.5 12Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Levels;
