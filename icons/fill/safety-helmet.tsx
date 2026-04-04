import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SafetyHelmet({
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
          d="M16,11.5v-1.5c0-2.519-1.388-4.799-3.5-6.032v2.782c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V3.25c0-.965-.785-1.75-1.75-1.75h-.5c-.965,0-1.75,.785-1.75,1.75v3.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V3.968c-2.112,1.234-3.5,3.513-3.5,6.032v1.5h14Z"
          fill={fill}
        />
        <rect
          height="3"
          width="16"
          fill={secondaryfill}
          rx="1.5"
          ry="1.5"
          x="1"
          y="13"
        />
      </g>
    </svg>
  );
}

export default SafetyHelmet;
