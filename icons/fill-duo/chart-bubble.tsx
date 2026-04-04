import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartBubble({
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
          d="M9.25 14C9.25 12.6193 10.3693 11.5 11.75 11.5C13.1307 11.5 14.25 12.6193 14.25 14C14.25 15.3807 13.1307 16.5 11.75 16.5C10.3693 16.5 9.25 15.3807 9.25 14Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8 5.75C8 3.40279 9.90279 1.5 12.25 1.5C14.5972 1.5 16.5 3.40279 16.5 5.75C16.5 8.09721 14.5972 10 12.25 10C9.90279 10 8 8.09721 8 5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 11C1.5 9.34319 2.84319 8 4.5 8C6.15681 8 7.5 9.34319 7.5 11C7.5 12.6568 6.15681 14 4.5 14C2.84319 14 1.5 12.6568 1.5 11Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartBubble;
