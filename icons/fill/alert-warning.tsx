import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlertWarning({
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
          d="M9,11.5c.414,0,.75-.336,.75-.75V2.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75V10.75c0,.414,.336,.75,.75,.75Z"
          fill={fill}
        />
        <circle cx="9" cy="15" fill={secondaryfill} r="1" />
      </g>
    </svg>
  );
}

export default AlertWarning;
