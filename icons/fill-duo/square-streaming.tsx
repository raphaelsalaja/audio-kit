import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareStreaming({
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
          d="M4.75101 2C3.23179 2 2.00101 3.23079 2.00101 4.75V13.25C2.00101 14.7692 3.23179 16 4.75101 16H13.251C14.7702 16 16.001 14.7692 16.001 13.25V4.75C16.001 3.23079 14.7702 2 13.251 2H4.75101Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10.501 12.2479C10.501 11.8337 10.8368 11.4979 11.251 11.4979H12.751C13.1652 11.4979 13.501 11.8337 13.501 12.2479C13.501 12.6621 13.1652 12.9979 12.751 12.9979H11.251C10.8368 12.9979 10.501 12.6621 10.501 12.2479Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.50101 10.9979C9.50101 10.5837 9.16522 10.2479 8.75101 10.2479C8.33679 10.2479 8.00101 10.5837 8.00101 10.9979V11.4979H5.25101C4.83679 11.4979 4.50101 11.8337 4.50101 12.2479C4.50101 12.6621 4.83679 12.9979 5.25101 12.9979H8.00101V13.4979C8.00101 13.9121 8.33679 14.2479 8.75101 14.2479C9.16522 14.2479 9.50101 13.9121 9.50101 13.4979V10.9979Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.1651 6.00606L8.20902 4.28096C7.69995 3.98349 7.06143 4.35066 7.06143 4.94063V8.38958C7.06143 8.97831 7.7012 9.34548 8.20902 9.04925L11.1651 7.32415C11.6704 7.02917 11.6704 6.30104 11.1651 6.00606Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareStreaming;
