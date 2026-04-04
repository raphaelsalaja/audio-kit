import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gauge4({
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
          d="M9.00011 4C4.58901 4 1.00012 7.5889 1.00012 12C1.00012 12.0669 1.00402 12.1333 1.01282 12.2764C1.02742 12.6802 1.35852 13 1.76282 13H16.2374C16.6417 13 16.9776 12.603 16.9913 12.1997C16.9962 12.1333 17.0001 12.0669 17.0001 12C17.0001 7.5889 13.4112 4 9.00011 4Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00009 10.25C8.94999 10.25 8.9027 10.2607 8.8537 10.2649L7.2042 7.44823C6.9942 7.09033 6.5353 6.97023 6.1778 7.18013C5.8204 7.38913 5.70031 7.84861 5.90921 8.20601L7.55469 11.0158C7.36289 11.2963 7.25 11.6352 7.25 11.9999C7.25 12.9647 8.0352 13.7499 9 13.7499C9.9648 13.7499 10.75 12.9647 10.75 11.9999C10.75 11.0351 9.96489 10.25 9.00009 10.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Gauge4;
