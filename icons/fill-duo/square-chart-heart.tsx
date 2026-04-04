import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartHeart({
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
          d="M10.4601 6.6205C11.4338 7.60988 12.5178 8.23993 13.0332 8.51086C13.6397 8.8295 14.3602 8.82956 14.9668 8.51092C14.9776 8.50524 14.9887 8.49939 15 8.49339V13.75C15 15.2692 13.7692 16.5 12.25 16.5H3.75C2.23079 16.5 1 15.2692 1 13.75V5.25C1 3.73079 2.23079 2.5 3.75 2.5H8.50685C8.59573 4.29621 9.53532 5.68097 10.4601 6.6205Z"
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
          d="M13.7311 7.1831C13.9009 7.2723 14.0992 7.2723 14.269 7.1831C15.1662 6.7116 18 5.0021 18 2.2224C18.0044 1.0016 17.0263 0.0074 15.8134 0C15.0837 0.0094 14.4054 0.38 14 0.9907C13.5946 0.38 12.9163 0.0094 12.1866 0C10.9737 0.0074 9.99561 1.0016 10 2.2224C10 5.0021 12.8339 6.7115 13.7311 7.1831Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareChartHeart;
