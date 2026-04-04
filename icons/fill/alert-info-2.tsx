import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlertInfo2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m6,11.5c-.414,0-.75-.336-.75-.75v-6c0-.414.336-.75.75-.75s.75.336.75.75v6c0,.414-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="6" cy="1.5" fill={secondaryfill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default AlertInfo2;
