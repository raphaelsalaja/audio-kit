import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopePen({
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
          d="M3.75 2.5C2.23054 2.5 1 3.73203 1 5.25V12.75C1 14.268 2.23054 15.5 3.75 15.5H8.5215C8.93571 15.5 9.2715 15.1642 9.2715 14.75C9.2715 14.3358 8.93571 14 8.5215 14H3.75C3.061 14 2.5 13.439 2.5 12.75V6.521L8.154 9.641C8.419 9.787 8.71 9.86 9 9.86C9.29 9.86 9.581 9.787 9.846 9.641L15.5 6.521V7.7943C15.5 8.20851 15.8358 8.5443 16.25 8.5443C16.6642 8.5443 17 8.20851 17 7.7943V5.25C17 3.73203 15.7695 2.5 14.25 2.5H3.75Z"
          fill={fill}
        />
        <path
          d="M17.3669 10.9824L17.1992 10.8147L17.0315 10.647C16.3713 9.98541 15.2185 9.98591 14.5564 10.6465L11.3952 13.8076C11.3146 13.8882 11.2536 13.9858 11.2165 14.0932L10.2956 16.7641C10.2018 17.0356 10.2712 17.3364 10.4743 17.539C10.6174 17.6821 10.8088 17.7587 11.0046 17.7587C11.0866 17.7587 11.1692 17.7455 11.2492 17.7177L13.9201 16.7968C14.0275 16.7597 14.1252 16.6987 14.2057 16.6181L17.3668 13.457C17.6974 13.1264 17.8795 12.687 17.8795 12.2197C17.8795 11.7519 17.6975 11.3125 17.3669 10.9824Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default EnvelopePen;
