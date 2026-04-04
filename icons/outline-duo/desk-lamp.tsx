import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DeskLamp({
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
          d="M9.95701 3.50401L8.72602 2.65801C8.31802 2.37801 7.76002 2.48101 7.48002 2.88901L6.90201 3.73001C6.62201 4.13801 6.725 4.69601 7.133 4.97601L8.36402 5.82201C9.34902 6.49901 8.96401 9.13501 10.949 10.5L15.251 4.24301C13.297 2.89901 10.941 4.18101 9.95701 3.50401Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 15.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.4956 7.4911L3.96709 8.859C3.56709 9.217 3.52109 9.827 3.86309 10.241L8.00109 15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.95701 3.50401L8.72602 2.65801C8.31802 2.37801 7.76002 2.48101 7.48002 2.88901L6.90201 3.73001C6.62201 4.13801 6.725 4.69601 7.133 4.97601L8.36402 5.82201C9.34902 6.49901 8.96401 9.13501 10.949 10.5L15.251 4.24301C13.297 2.89901 10.941 4.18101 9.95701 3.50401Z"
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

export default DeskLamp;
