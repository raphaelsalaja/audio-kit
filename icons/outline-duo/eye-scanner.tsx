import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EyeScanner({
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
          d="M3.756 9.809C3.414 9.321 3.414 8.679 3.756 8.191C4.528 7.089 6.231 5.25 9 5.25C11.769 5.25 13.472 7.089 14.244 8.191C14.586 8.679 14.586 9.321 14.244 9.809C13.472 10.911 11.769 12.75 9 12.75C6.231 12.75 4.528 10.911 3.756 9.809Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.756 9.809C3.414 9.321 3.414 8.679 3.756 8.191C4.528 7.089 6.231 5.25 9 5.25C11.769 5.25 13.472 7.089 14.244 8.191C14.586 8.679 14.586 9.321 14.244 9.809C13.472 10.911 11.769 12.75 9 12.75C6.231 12.75 4.528 10.911 3.756 9.809Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.25 5.75V4.25C2.25 3.145 3.145 2.25 4.25 2.25H5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 2.25H13.75C14.855 2.25 15.75 3.145 15.75 4.25V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 12.25V13.75C15.75 14.855 14.855 15.75 13.75 15.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 15.75H4.25C3.145 15.75 2.25 14.855 2.25 13.75V12.25"
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

export default EyeScanner;
