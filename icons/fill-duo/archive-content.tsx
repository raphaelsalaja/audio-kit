import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveContent({
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
          d="M2 4.75C2 3.23203 3.23054 2 4.75 2H13.25C14.7695 2 16 3.23203 16 4.75V11.25C16 11.6642 15.6642 12 15.25 12H12.5V14.5H5.5V12H2.75C2.33579 12 2 11.6642 2 11.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12 11H14H16V13.25C16 14.767 14.767 16 13.25 16H4.75C3.233 16 2 14.767 2 13.25V11H3.5H6C6.414 11 6.75 11.336 6.75 11.75V13.25C6.75 13.388 6.862 13.5 7 13.5H11C11.138 13.5 11.25 13.388 11.25 13.25V11.75C11.25 11.336 11.586 11 12 11Z"
          fill={fill}
        />
        <path
          d="M5 8.25C5 7.83579 5.33579 7.5 5.75 7.5H12.25C12.6642 7.5 13 7.83579 13 8.25C13 8.66421 12.6642 9 12.25 9H5.75C5.33579 9 5 8.66421 5 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 5.25C5 4.83579 5.33579 4.5 5.75 4.5H12.25C12.6642 4.5 13 4.83579 13 5.25C13 5.66421 12.6642 6 12.25 6H5.75C5.33579 6 5 5.66421 5 5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ArchiveContent;
