import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DesignFilePlus({
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
          d="M3.75 16.25C2.645 16.25 1.75 15.355 1.75 14.25V3.75C1.75 2.645 2.645 1.75 3.75 1.75H9.336C9.601 1.75 9.856 1.855 10.043 2.043L13.957 5.957C14.145 6.145 14.25 6.399 14.25 6.664V9.53516C13.248 9.76253 12.5 10.6792 12.5 11.75V12H12.25C11.0074 12 10 13.0074 10 14.25C10 14.8267 10.217 15.3528 10.5738 15.751C10.7644 15.9637 9.97044 16.2878 9.78764 16.25H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.75 11.75V16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 14.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
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
          d="M7.402 7.64804C7.526 7.43104 7.52497 7.16202 7.39897 6.94702L6.06899 4.66703C5.81799 4.23703 5.10998 4.23903 4.86098 4.66703L3.53099 6.94605C3.40499 7.16205 3.403 7.43004 3.528 7.64804C3.652 7.86504 3.885 8.00003 4.135 8.00003H6.79399C7.04399 8.00003 7.278 7.86504 7.402 7.64804Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.25 8.7959V6.66409C14.25 6.39899 14.145 6.14509 13.957 5.95709L10.043 2.043C9.856 1.855 9.601 1.75 9.336 1.75H3.75C2.645 1.75 1.75 2.645 1.75 3.75V14.25C1.75 15.355 2.645 16.25 3.75 16.25H10.0271"
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

export default DesignFilePlus;
