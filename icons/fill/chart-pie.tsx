import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartPie({
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
          d="M15.913,11.317c-.376-.172-.821-.005-.993,.372-1.054,2.315-3.377,3.811-5.919,3.811-3.584,0-6.5-2.916-6.5-6.5,0-2.542,1.496-4.866,3.811-5.919,.377-.171,.543-.616,.372-.993-.172-.377-.617-.544-.993-.372C2.841,3.012,1,5.872,1,9c0,4.411,3.589,8,8,8,3.128,0,5.988-1.841,7.285-4.689,.171-.377,.005-.822-.372-.993Z"
          fill={fill}
        />
        <path
          d="M9,1c-.414,0-.75,.336-.75,.75v7.25c0,.414,.336,.75,.75,.75h7.25c.414,0,.75-.336,.75-.75,0-4.411-3.589-8-8-8Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ChartPie;
