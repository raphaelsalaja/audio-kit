import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderUser({
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
          d="M13.75 6.75C14.8362 6.75 15.7193 7.61533 15.749 8.69434V9.06543C15.2564 8.71087 14.6533 8.5 14 8.5C12.3432 8.5 11 9.84317 11 11.5C11 12.1182 11.1873 12.6925 11.5078 13.1699C10.587 13.7034 9.82089 14.5289 9.39062 15.543L4.25 15.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75H13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.02499 7.761 3.49799L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V8.43799"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.719 8.43799C15.568 7.48299 14.748 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H8.7231"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 13C14.8284 13 15.5 12.3284 15.5 11.5C15.5 10.6716 14.8284 10 14 10C13.1716 10 12.5 10.6716 12.5 11.5C12.5 12.3284 13.1716 13 14 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.1011 18H11.899C11.4923 18 11.1085 17.8013 10.8717 17.4683C10.6393 17.1407 10.5787 16.7207 10.7096 16.3453C11.1979 14.943 12.5201 14.0001 14.0001 14.0001C15.4801 14.0001 16.8023 14.943 17.2911 16.3458C17.4215 16.7208 17.3609 17.1407 17.1285 17.4684C16.8917 17.8014 16.5078 18 16.1011 18Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FolderUser;
