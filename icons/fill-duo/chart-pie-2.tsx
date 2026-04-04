import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartPie2({
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
          d="M13.4379 15.6572L9.1558 9.4247C9.06992 9.29971 9.02396 9.15163 9.02396 8.99999V1.00003C13.4311 1.01295 17 4.58966 17 9C17 11.7765 15.5855 14.2227 13.4379 15.6572Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M9.02396 8.95013L14.9714 3.67613C16.2331 5.09034 17 6.95561 17 9C17 11.7765 15.5855 14.2227 13.4379 15.6572L9.1558 9.4247C9.06992 9.29971 9.02396 9.15163 9.02396 8.99999V8.95013Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1 9C1 4.58168 4.58179 1 9 1L9.02396 1.00003V8.99997C9.02396 9.15161 9.06993 9.2997 9.1558 9.42468L13.4379 15.6572C12.168 16.5055 10.6417 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChartPie2;
