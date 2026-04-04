import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClosingQuotationMark({
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
          d="M1.75 4.75C1.75 4.19772 2.19772 3.75 2.75 3.75H6.25C6.80228 3.75 7.25 4.19772 7.25 4.75V8.7598H2.75C2.19772 8.7598 1.75 8.31208 1.75 7.7598V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 4.75C10.75 4.19772 11.1977 3.75 11.75 3.75H15.25C15.8023 3.75 16.25 4.19772 16.25 4.75V8.7598H11.75C11.1977 8.7598 10.75 8.31208 10.75 7.7598V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 8.75H11.75C11.198 8.75 10.75 8.302 10.75 7.75V4.75C10.75 4.198 11.198 3.75 11.75 3.75H15.25C15.802 3.75 16.25 4.198 16.25 4.75V8.75ZM16.25 8.75C16.25 12.5 15 14.375 12.75 15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 8.75H2.75C2.198 8.75 1.75 8.302 1.75 7.75V4.75C1.75 4.198 2.198 3.75 2.75 3.75H6.25C6.802 3.75 7.25 4.198 7.25 4.75V8.75ZM7.25 8.75C7.25 12.5 6 14.375 3.75 15.25"
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

export default ClosingQuotationMark;
