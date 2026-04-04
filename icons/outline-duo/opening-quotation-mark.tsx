import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpeningQuotationMark({
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
          d="M1.75 9.25314H6.25C6.80228 9.25314 7.25 9.70086 7.25 10.2531V13.25C7.25 13.8023 6.80228 14.25 6.25 14.25H2.75C2.19772 14.25 1.75 13.8023 1.75 13.25V9.25314Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 9.25314H15.25C15.8023 9.25314 16.25 9.70086 16.25 10.2531V13.25C16.25 13.8023 15.8023 14.25 15.25 14.25H11.75C11.1977 14.25 10.75 13.8023 10.75 13.25V9.25314Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 9.25H6.25C6.802 9.25 7.25 9.698 7.25 10.25V13.25C7.25 13.802 6.802 14.25 6.25 14.25H2.75C2.198 14.25 1.75 13.802 1.75 13.25V9.25ZM1.75 9.25C1.75 5.5 3 3.625 5.25 2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 9.25H15.25C15.802 9.25 16.25 9.698 16.25 10.25V13.25C16.25 13.802 15.802 14.25 15.25 14.25H11.75C11.198 14.25 10.75 13.802 10.75 13.25V9.25ZM10.75 9.25C10.75 5.5 12 3.625 14.25 2.75"
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

export default OpeningQuotationMark;
