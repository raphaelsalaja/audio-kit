import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldUpFromLine({
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
          d="M13.854 7.43903L9.39099 1.83303C9.19099 1.58203 8.80899 1.58203 8.60899 1.83303L4.14599 7.43903C3.88499 7.76703 4.11799 8.25003 4.53699 8.25003H6.74999V12.25C6.74999 12.802 7.19799 13.25 7.74999 13.25H10.25C10.802 13.25 11.25 12.802 11.25 12.25V8.25003H13.463C13.882 8.25003 14.115 7.76603 13.854 7.43903Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.854 7.43903L9.39099 1.83303C9.19099 1.58203 8.80899 1.58203 8.60899 1.83303L4.14599 7.43903C3.88499 7.76703 4.11799 8.25003 4.53699 8.25003H6.74999V12.25C6.74999 12.802 7.19799 13.25 7.74999 13.25H10.25C10.802 13.25 11.25 12.802 11.25 12.25V8.25003H13.463C13.882 8.25003 14.115 7.76603 13.854 7.43903Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 16.25H6.75"
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

export default ArrowBoldUpFromLine;
