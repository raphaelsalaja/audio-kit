import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CornerRadius({
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
          d="m2.75,16c-.4141,0-.75-.3359-.75-.75v-6.5c0-3.7222,3.0278-6.75,6.75-6.75h6.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-6.5c-2.895,0-5.25,2.355-5.25,5.25v6.5c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CornerRadius;
