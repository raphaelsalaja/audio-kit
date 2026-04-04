import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchivePlus({
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
          d="M16.25 3.5H14.5V1.75C14.5 1.3359 14.1641 1 13.75 1C13.3359 1 13 1.3359 13 1.75V3.5H11.25C10.8359 3.5 10.5 3.8359 10.5 4.25C10.5 4.6641 10.8359 5 11.25 5H13V6.75C13 7.1641 13.3359 7.5 13.75 7.5C14.1641 7.5 14.5 7.1641 14.5 6.75V5H16.25C16.6641 5 17 4.6641 17 4.25C17 3.8359 16.6641 3.5 16.25 3.5Z"
          fill={secondaryfill}
        />
        <path
          d="M4.75 2C3.23054 2 2 3.23203 2 4.75V13.25C2 14.7666 3.2334 16 4.75 16H13.25C14.7666 16 16 14.7666 16 13.25V10.25C16 9.83579 15.6642 9.5 15.25 9.5H11.75C11.3359 9.5 11 9.8359 11 10.25V11.75C11 11.8877 10.8877 12 10.75 12H7.25C7.1123 12 7 11.8877 7 11.75V10.25C7 9.8359 6.6641 9.5 6.25 9.5H3.5V4.75C3.5 4.0605 4.0605 3.5 4.75 3.5H8.6554C9.06961 3.5 9.4054 3.16421 9.4054 2.75C9.4054 2.33579 9.06961 2 8.6554 2H4.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArchivePlus;
