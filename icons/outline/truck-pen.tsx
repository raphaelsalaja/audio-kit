import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TruckPen({
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
          d="M10.519 14.25H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.8952 3.25H10.25C11.355 3.25 12.25 4.145 12.25 5.25V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.76801 14.25H2.75C1.645 14.25 0.75 13.355 0.75 12.25V10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 6.25H14.454C14.794 6.25 15.111 6.42301 15.295 6.70901L17.091 9.50299C17.195 9.66399 17.25 9.85201 17.25 10.044V12.25C17.25 13.355 16.355 14.25 15.25 14.25H14"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 9.75H17.153"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.54593 6.20419L6.70712 3.043C7.09762 2.6525 7.09762 2.0193 6.70712 1.6288L6.12134 1.043C5.73084 0.652497 5.09762 0.652497 4.70712 1.043L1.54593 4.20419L0.750122 7.00009L3.54593 6.20419Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 16.25C5.466 16.25 6.25 15.466 6.25 14.5C6.25 13.534 5.466 12.75 4.5 12.75C3.534 12.75 2.75 13.534 2.75 14.5C2.75 15.466 3.534 16.25 4.5 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 16.25C13.216 16.25 14 15.466 14 14.5C14 13.534 13.216 12.75 12.25 12.75C11.284 12.75 10.5 13.534 10.5 14.5C10.5 15.466 11.284 16.25 12.25 16.25Z"
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

export default TruckPen;
