import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveCheck({
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
          d="M7.87589 2C7.63324 2.62008 7.5 3.2947 7.5 4C7.5 7.03391 9.96535 9.5 13 9.5C14.1063 9.5 15.1369 9.17227 16 8.60877V11.25C16 11.6642 15.6642 12 15.25 12H12.5V14.5H5.5V12H2.75C2.33579 12 2 11.6642 2 11.25V4.75C2 3.23203 3.23054 2 4.75 2H7.87589Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12 11H14H16V13.25C16 14.767 14.767 16 13.25 16H4.75C3.233 16 2 14.767 2 13.25V11H3.5H6C6.414 11 6.75 11.336 6.75 11.75V13.25C6.75 13.388 6.862 13.5 7 13.5H11C11.138 13.5 11.25 13.388 11.25 13.25V11.75C11.25 11.336 11.586 11 12 11Z"
          fill={fill}
        />
        <path
          d="M13 0C10.7939 0 9 1.7944 9 4C9 6.2056 10.7939 8 13 8C15.2061 8 17 6.2056 17 4C17 1.7944 15.2061 0 13 0ZM15.3076 3.252L13.0576 5.752C12.9153 5.90985 12.7124 6.0001 12.5 6.0001C12.3018 6.0001 12.1104 5.9215 11.9697 5.7804L10.7197 4.5304C10.4267 4.2374 10.4267 3.7628 10.7197 3.4699C11.0127 3.177 11.4873 3.1769 11.7802 3.4699L12.4716 4.1608L14.1923 2.2482C14.4706 1.9416 14.9433 1.9162 15.2519 2.1925C15.5595 2.4698 15.5849 2.9439 15.3076 3.252Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArchiveCheck;
