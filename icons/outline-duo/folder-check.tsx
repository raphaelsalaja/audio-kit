import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderCheck({
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
          d="M13.75 6.75C14.855 6.75 15.75 7.645 15.75 8.75V9.2373C14.9409 8.7691 14.002 8.5 13 8.5C9.96251 8.5 7.5 10.9623 7.5 14C7.5 14.3777 7.53873 14.7464 7.61142 15.1027C7.63599 15.2232 7.43297 15.25 7.31005 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75H13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.025 7.761 3.498L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V8.51599"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.726 8.51599C15.609 7.52299 14.774 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H6.8766"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 10C10.7939 10 9 11.7944 9 14C9 16.2056 10.7939 18 13 18C15.2061 18 17 16.2056 17 14C17 11.7944 15.2061 10 13 10ZM15.3076 13.252L13.0576 15.752C12.9199 15.9048 12.7256 15.9942 12.5195 15.9996C12.5127 16.0001 12.5068 16.0001 12.5 16.0001C12.3018 16.0001 12.1104 15.9215 11.9697 15.7804L10.7197 14.5304C10.4267 14.2374 10.4267 13.7628 10.7197 13.4699C11.0127 13.177 11.4873 13.1769 11.7802 13.4699L12.4716 14.1608L14.1923 12.2482C14.4706 11.9416 14.9433 11.9162 15.2519 12.1925C15.5595 12.4698 15.5849 12.9439 15.3076 13.252Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FolderCheck;
