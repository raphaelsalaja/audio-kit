import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderKey({
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
          d="M13.75 6.75C14.855 6.75 15.75 7.645 15.75 8.75V11.7943C15.75 12.1197 15.3325 12.4112 15.1402 12.1487C14.3724 11.1012 13.1394 10.5 11.25 10.5C8.90276 10.5 7 12.4028 7 14.75C7 14.9192 6.98077 15.086 7 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75H13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.02499 7.761 3.49799L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V9.09399"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 11.75V8.75C15.75 7.646 14.855 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 16.75C12.3546 16.75 13.25 15.8546 13.25 14.75C13.25 13.6454 12.3546 12.75 11.25 12.75C10.1454 12.75 9.25 13.6454 9.25 14.75C9.25 15.8546 10.1454 16.75 11.25 16.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 14.75H17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 14.75V16.25"
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

export default FolderKey;
