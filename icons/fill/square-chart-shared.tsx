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
          d="M14.5 3C15.3284 3 16 2.32843 16 1.5C16 0.671573 15.3284 0 14.5 0C13.6716 0 13 0.671573 13 1.5C13 2.32843 13.6716 3 14.5 3Z"
          fill={secondaryfill}
        />
        <path
          d="M16.6011 8.00001H12.399C11.9923 8.00001 11.6085 7.80132 11.3717 7.46832C11.1393 7.14072 11.0787 6.72072 11.2096 6.34532C11.6979 4.94302 13.0201 4.00012 14.5001 4.00012C15.9801 4.00012 17.3023 4.943 17.7911 6.3458C17.9215 6.7208 17.8609 7.14071 17.6285 7.46841C17.3917 7.80141 17.0078 8.00001 16.6011 8.00001Z"
          fill={secondaryfill}
        />
        <path
          d="M11.6707 2.5H3.75C2.233 2.5 1 3.733 1 5.25V13.75C1 15.267 2.233 16.5 3.75 16.5H12.25C13.767 16.5 15 15.267 15 13.75V9.50001H12.399C11.5038 9.50001 10.6658 9.06392 10.1493 8.33761C9.64051 7.62209 9.50424 6.68091 9.79325 5.85144C10.1958 4.69578 10.9955 3.75735 12.0078 3.1706C11.869 2.96385 11.7551 2.73887 11.6707 2.5ZM4.75 13.5C5.164 13.5 5.5 13.164 5.5 12.75V8.5C5.5 8.086 5.164 7.75 4.75 7.75C4.336 7.75 4 8.086 4 8.5V12.75C4 13.164 4.336 13.5 4.75 13.5ZM8 13.5C8.414 13.5 8.75 13.164 8.75 12.75V6.25C8.75 5.836 8.414 5.5 8 5.5C7.586 5.5 7.25 5.836 7.25 6.25V12.75C7.25 13.164 7.586 13.5 8 13.5ZM11.25 13.5C11.664 13.5 12 13.164 12 12.75V10.75C12 10.336 11.664 10 11.25 10C10.836 10 10.5 10.336 10.5 10.75V12.75C10.5 13.164 10.836 13.5 11.25 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareChartShared;
