import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DesignFileImport({
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
          d="M10.5 10C11.605 10 12.5 9.105 12.5 8C12.5 6.895 11.605 6 10.5 6C9.395 6 8.5 6.895 8.5 8C8.5 9.105 9.395 10 10.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.60001 10H5.89999C5.40299 10 5 10.403 5 10.9V12.6C5 13.097 5.40299 13.5 5.89999 13.5H7.60001C8.09701 13.5 8.5 13.097 8.5 12.6V10.9C8.5 10.403 8.09701 10 7.60001 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.402 7.64801C7.526 7.43101 7.52498 7.16199 7.39898 6.94699L6.069 4.667C5.818 4.237 5.10999 4.239 4.86099 4.667L3.531 6.94602C3.405 7.16202 3.403 7.43001 3.528 7.64801C3.652 7.86501 3.88501 8 4.13501 8H6.794C7.044 8 7.278 7.86501 7.402 7.64801Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.75 16.25L12.25 13.75L14.75 11.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 8.29791V6.66409C14.25 6.39899 14.145 6.14509 13.957 5.95709L10.043 2.043C9.856 1.855 9.601 1.75 9.336 1.75H3.75C2.645 1.75 1.75 2.645 1.75 3.75V14.25C1.75 15.355 2.645 16.25 3.75 16.25H10.5078"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5 13.75H17.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DesignFileImport;
