import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveClock({
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
          d="M13.75 0.25C11.5439 0.25 9.75 2.0444 9.75 4.25C9.75 6.4556 11.5439 8.25 13.75 8.25C15.9561 8.25 17.75 6.4556 17.75 4.25C17.75 2.0444 15.9561 0.25 13.75 0.25ZM16.0625 5.2002C15.9434 5.4898 15.6641 5.665 15.3691 5.665C15.2734 5.665 15.1777 5.6469 15.0839 5.6088L13.4648 4.9438C13.1836 4.8281 13 4.5542 13 4.25V2.5C13 2.0859 13.3359 1.75 13.75 1.75C14.1641 1.75 14.5 2.0859 14.5 2.5V3.7471L15.6543 4.2212C16.0371 4.3784 16.2207 4.8169 16.0625 5.2002Z"
          fill={secondaryfill}
        />
        <path
          d="M11.75 9.5C11.3359 9.5 11 9.8359 11 10.25V11.75C11 11.8877 10.8877 12 10.75 12H7.25C7.1123 12 7 11.8877 7 11.75V10.25C7 9.8359 6.6641 9.5 6.25 9.5H3.5V4.75C3.5 4.0605 4.0605 3.5 4.75 3.5H6.8756C7.28981 3.5 7.6256 3.16421 7.6256 2.75C7.6256 2.33579 7.28981 2 6.8756 2H4.75C3.23054 2 2 3.23203 2 4.75V13.25C2 14.7666 3.2334 16 4.75 16H13.25C14.7666 16 16 14.7666 16 13.25V10.25C16 9.83579 15.6642 9.5 15.25 9.5H11.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArchiveClock;
