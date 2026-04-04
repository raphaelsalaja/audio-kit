import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarList({
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
          d="M16 15.5H11C10.5859 15.5 10.25 15.1641 10.25 14.75C10.25 14.3359 10.5859 14 11 14H16C16.4141 14 16.75 14.3359 16.75 14.75C16.75 15.1641 16.4141 15.5 16 15.5Z"
          fill={fill}
        />
        <path
          d="M9.6033 13C9.0875 12.5874 8.75 11.9604 8.75 11.25C8.75 10.0093 9.7593 9 11 9H15.2902L16.7735 7.5542C16.9776 7.355 17.0518 7.0566 16.963 6.7852C16.8751 6.5137 16.6407 6.316 16.3575 6.2749L11.7384 5.6035L9.673 1.418C9.4191 0.9063 8.5812 0.9063 8.3273 1.418L6.2619 5.6035L1.6428 6.2749C1.3596 6.3159 1.1252 6.5137 1.0373 6.7852C0.948399 7.0567 1.0227 7.355 1.2268 7.5542L4.5696 10.8125L3.7796 15.4131C3.7317 15.6943 3.847 15.979 4.0775 16.147C4.308 16.314 4.6146 16.3365 4.8675 16.2041L8.8578 14.1072C8.9932 13.6675 9.2514 13.2815 9.6033 13Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16 12H11C10.5859 12 10.25 11.6641 10.25 11.25C10.25 10.8359 10.5859 10.5 11 10.5H16C16.4141 10.5 16.75 10.8359 16.75 11.25C16.75 11.6641 16.4141 12 16 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StarList;
