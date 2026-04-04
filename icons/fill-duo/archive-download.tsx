import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveDownload({
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
          d="M9.75 4.25C9.75 3.83579 9.41421 3.5 9 3.5C8.58579 3.5 8.25 3.83579 8.25 4.25V7.43934L7.03033 6.21967C6.73744 5.92678 6.26256 5.92678 5.96967 6.21967C5.67678 6.51256 5.67678 6.98744 5.96967 7.28033L8.46967 9.78033C8.76256 10.0732 9.23744 10.0732 9.53033 9.78033L12.0303 7.28033C12.3232 6.98744 12.3232 6.51256 12.0303 6.21967C11.7374 5.92678 11.2626 5.92678 10.9697 6.21967L9.75 7.43934V4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ArchiveDownload;
