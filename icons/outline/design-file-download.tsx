import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DesignFileDownload({
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
          d="M11 10C12.105 10 13 9.105 13 8C13 6.895 12.105 6 11 6C9.895 6 9 6.895 9 8C9 9.105 9.895 10 11 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.10001 10H6.39999C5.90299 10 5.5 10.403 5.5 10.9V12.6C5.5 13.097 5.90299 13.5 6.39999 13.5H8.10001C8.59701 13.5 9 13.097 9 12.6V10.9C9 10.403 8.59701 10 8.10001 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.90199 7.64801C8.02599 7.43101 8.025 7.16199 7.899 6.94699L6.569 4.667C6.318 4.237 5.60999 4.239 5.36099 4.667L4.031 6.94602C3.905 7.16202 3.903 7.43001 4.028 7.64801C4.152 7.86501 4.38499 8 4.63499 8H7.294C7.544 8 7.77799 7.86501 7.90199 7.64801Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M17.25 14.75L14.75 17.25L12.25 14.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 17V12.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 9.25V6.66409C14.75 6.39899 14.645 6.14509 14.457 5.95709L10.543 2.043C10.356 1.855 10.101 1.75 9.836 1.75H4.25C3.145 1.75 2.25 2.645 2.25 3.75V14.25C2.25 15.355 3.145 16.25 4.25 16.25H9.66521"
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

export default DesignFileDownload;
