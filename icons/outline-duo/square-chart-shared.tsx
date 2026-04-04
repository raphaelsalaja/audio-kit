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
          d="M12.3994 9.49999C11.5068 9.49999 10.666 9.06489 10.1484 8.33639C9.63571 7.61329 9.5029 6.6845 9.7939 5.8515C10.0775 5.0362 10.5649 4.3394 11.1821 3.7935C11.411 3.591 10.8314 3.19989 10.102 3.24989H3.75C2.645 3.24989 1.75 4.14489 1.75 5.24989V13.7499C1.75 14.8549 2.645 15.7499 3.75 15.7499H12.25C13.355 15.7499 14.25 14.8549 14.25 13.7499V9.49989L12.3994 9.49999Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 8.5V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 10.75V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 6.25V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 10.25V13.75C14.25 14.855 13.355 15.75 12.25 15.75H3.75C2.645 15.75 1.75 14.855 1.75 13.75V5.25C1.75 4.145 2.645 3.25 3.75 3.25H10.6535"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 3C15.3284 3 16 2.32843 16 1.5C16 0.671573 15.3284 0 14.5 0C13.6716 0 13 0.671573 13 1.5C13 2.32843 13.6716 3 14.5 3Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.6011 8H12.399C11.9923 8 11.6085 7.80131 11.3717 7.46831C11.1393 7.14071 11.0787 6.72071 11.2096 6.34531C11.6979 4.94301 13.0201 4.00011 14.5001 4.00011C15.9801 4.00011 17.3023 4.94299 17.7911 6.34579C17.9215 6.72079 17.8609 7.1407 17.6285 7.4684C17.3917 7.8014 17.0078 8 16.6011 8Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SquareChartShared;
