import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ConnectedDots2({
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
          d="M8.27192 5.81058C8.63401 6.01174 8.76447 6.46834 8.56331 6.83043L5.74761 11.8987C5.54646 12.2608 5.08985 12.3913 4.72776 12.1901C4.36568 11.989 4.23522 11.5324 4.43638 11.1703L7.25208 6.10197C7.45323 5.73988 7.90984 5.60942 8.27192 5.81058Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9.72807 5.81058C10.0902 5.60942 10.5468 5.73988 10.7479 6.10197L13.5636 11.1703C13.7648 11.5324 13.6343 11.989 13.2722 12.1901C12.9101 12.3913 12.4535 12.2608 12.2524 11.8987L9.43668 6.83043C9.23552 6.46834 9.36598 6.01174 9.72807 5.81058Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M5.5 13.75C5.5 13.3358 5.83579 13 6.25 13H11.7653C12.1795 13 12.5153 13.3358 12.5153 13.75C12.5153 14.1642 12.1795 14.5 11.7653 14.5H6.25C5.83579 14.5 5.5 14.1642 5.5 13.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M6 4.5C6 2.8427 7.34327 1.5 9 1.5C10.6567 1.5 12 2.8427 12 4.5C12 6.1573 10.6567 7.5 9 7.5C7.34327 7.5 6 6.1573 6 4.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11 13.5C11 11.8427 12.3433 10.5 14 10.5C15.6567 10.5 17 11.8427 17 13.5C17 15.1573 15.6567 16.5 14 16.5C12.3433 16.5 11 15.1573 11 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 13.5C1 11.8427 2.34327 10.5 4 10.5C5.65673 10.5 7 11.8427 7 13.5C7 15.1573 5.65673 16.5 4 16.5C2.34327 16.5 1 15.1573 1 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ConnectedDots2;
