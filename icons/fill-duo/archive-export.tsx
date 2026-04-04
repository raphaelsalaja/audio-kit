import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveExport({
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
          d="M8.25 9.25C8.25 9.66421 8.58579 10 9 10C9.41421 10 9.75 9.66421 9.75 9.25L9.75 6.06066L10.9697 7.28033C11.2626 7.57322 11.7374 7.57322 12.0303 7.28033C12.3232 6.98744 12.3232 6.51256 12.0303 6.21967L9.53033 3.71967C9.23744 3.42678 8.76256 3.42678 8.46967 3.71967L5.96967 6.21967C5.67678 6.51256 5.67678 6.98744 5.96967 7.28033C6.26256 7.57322 6.73744 7.57322 7.03033 7.28033L8.25 6.06066L8.25 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ArchiveExport;
