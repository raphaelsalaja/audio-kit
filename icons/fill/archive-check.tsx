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
          d="M11.75 9.5C11.3359 9.5 11 9.8359 11 10.25V11.75C11 11.8877 10.8877 12 10.75 12H7.25C7.1123 12 7 11.8877 7 11.75V10.25C7 9.8359 6.6641 9.5 6.25 9.5H3.5V4.75C3.5 4.0605 4.0605 3.5 4.75 3.5H6.8756C7.28981 3.5 7.6256 3.16421 7.6256 2.75C7.6256 2.33579 7.28981 2 6.8756 2H4.75C3.23054 2 2 3.23203 2 4.75V13.25C2 14.7666 3.2334 16 4.75 16H13.25C14.7666 16 16 14.7666 16 13.25V10.25C16 9.83579 15.6642 9.5 15.25 9.5H11.75Z"
          fill={fill}
        />
        <path
          d="M13 0C10.7939 0 9 1.7944 9 4C9 6.2056 10.7939 8 13 8C15.2061 8 17 6.2056 17 4C17 1.7944 15.2061 0 13 0ZM15.3076 3.252L13.0576 5.752C12.9199 5.9048 12.7256 5.9942 12.5195 5.9996C12.3213 5.9996 12.1104 5.9215 11.9697 5.7804L10.7197 4.5304C10.4267 4.2374 10.4267 3.7628 10.7197 3.4699C11.0127 3.177 11.4873 3.1769 11.7802 3.4699L12.4716 4.1608L14.1923 2.2482C14.4706 1.9416 14.9433 1.9162 15.2519 2.1925C15.5595 2.4698 15.5849 2.9439 15.3076 3.252Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ArchiveCheck;
