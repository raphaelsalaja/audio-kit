import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AdjustContrast2({
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
          d="M3.34315 14.6568C6.46729 17.781 11.5326 17.7811 14.6569 14.6568C17.7811 11.5326 17.781 6.46728 14.6569 3.34313C11.5327 0.218989 6.46737 0.218912 3.34315 3.34313C0.218924 6.46736 0.219002 11.5327 3.34315 14.6568Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.6569 14.6568C11.5326 17.7811 6.4673 17.781 3.34315 14.6568L14.6569 3.34314C17.781 6.46728 17.7811 11.5326 14.6569 14.6568Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AdjustContrast2;
