import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderSearch({
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
          d="M13.75 6.75H4.25C3.145 6.75 2.25 7.645 2.25 8.75V13.25C2.25 14.355 3.145 15.25 4.25 15.25H9.1818C9.32809 15.25 9.48263 15.2311 9.59452 15.1368C9.61898 15.1162 9.63446 15.0963 9.63059 15.0806C9.54526 14.7344 9.5 14.3725 9.5 14C9.5 11.5147 11.5147 9.5 14 9.5C14.6207 9.5 15.0625 9.5 15.75 9.5V8.75C15.75 7.645 14.855 6.75 13.75 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14 16.25C15.2426 16.25 16.25 15.2426 16.25 14C16.25 12.7574 15.2426 11.75 14 11.75C12.7574 11.75 11.75 12.7574 11.75 14C11.75 15.2426 12.7574 16.25 14 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.59 15.59L17.25 17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.02499 7.761 3.49799L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 8.75C15.75 7.646 14.855 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H8.9019"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default FolderSearch;
