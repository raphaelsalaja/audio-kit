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
          d="M11.25 10.25V11.25C11.25 11.802 10.802 12.25 10.25 12.25H7.75C7.198 12.25 6.75 11.802 6.75 11.25V10.25H2.75V13.25C2.75 14.354 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.354 15.25 13.25V10.25H11.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 10.25V11.25C11.25 11.802 10.802 12.25 10.25 12.25H7.75C7.198 12.25 6.75 11.802 6.75 11.25V10.25H2.75V13.25C2.75 14.354 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.354 15.25 13.25V10.25H11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.8756 2.75H4.75C3.645 2.75 2.75 3.646 2.75 4.75V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 0C10.7939 0 9 1.7944 9 4C9 6.2056 10.7939 8 13 8C15.2061 8 17 6.2056 17 4C17 1.7944 15.2061 0 13 0ZM15.3076 3.252L13.0576 5.752C12.9199 5.9048 12.7256 5.9942 12.5195 5.9996C12.5127 6.0001 12.5068 6.0001 12.5 6.0001C12.3018 6.0001 12.1104 5.9215 11.9697 5.7804L10.7197 4.5304C10.4267 4.2374 10.4267 3.7628 10.7197 3.4699C11.0127 3.177 11.4873 3.1769 11.7802 3.4699L12.4716 4.1608L14.1923 2.2482C14.4706 1.9416 14.9433 1.9162 15.2519 2.1925C15.5595 2.4698 15.5849 2.9439 15.3076 3.252Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ArchiveCheck;
