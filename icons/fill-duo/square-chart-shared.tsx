import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartShared({
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
          d="M3.75 2.5H11.6707C11.7551 2.73882 11.8689 2.96377 12.0078 3.17049C10.9957 3.75713 10.1963 4.69544 9.79325 5.85144C9.49745 6.69974 9.64845 7.63261 10.1527 8.34348L10.1537 8.34487C10.6775 9.08141 11.5165 9.50001 12.399 9.50001H15V13.75C15 15.2692 13.7692 16.5 12.25 16.5H3.75C2.23079 16.5 1 15.2692 1 13.75V5.25C1 3.73079 2.23079 2.5 3.75 2.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.75 7.75C5.16421 7.75 5.5 8.08579 5.5 8.5V12.75C5.5 13.1642 5.16421 13.5 4.75 13.5C4.33579 13.5 4 13.1642 4 12.75V8.5C4 8.08579 4.33579 7.75 4.75 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.25 10C11.6642 10 12 10.3358 12 10.75V12.75C12 13.1642 11.6642 13.5 11.25 13.5C10.8358 13.5 10.5 13.1642 10.5 12.75V10.75C10.5 10.3358 10.8358 10 11.25 10Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8 5.5C8.41421 5.5 8.75 5.83579 8.75 6.25V12.75C8.75 13.1642 8.41421 13.5 8 13.5C7.58579 13.5 7.25 13.1642 7.25 12.75V6.25C7.25 5.83579 7.58579 5.5 8 5.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.5 3C15.3284 3 16 2.32843 16 1.5C16 0.671573 15.3284 0 14.5 0C13.6716 0 13 0.671573 13 1.5C13 2.32843 13.6716 3 14.5 3Z"
          fill={fill}
        />
        <path
          d="M16.6011 8.00001H12.399C11.9923 8.00001 11.6085 7.80132 11.3717 7.46832C11.1393 7.14072 11.0787 6.72072 11.2096 6.34532C11.6979 4.94302 13.0201 4.00012 14.5001 4.00012C15.9801 4.00012 17.3023 4.943 17.7911 6.3458C17.9215 6.7208 17.8609 7.14071 17.6285 7.46841C17.3917 7.80141 17.0078 8.00001 16.6011 8.00001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareChartShared;
