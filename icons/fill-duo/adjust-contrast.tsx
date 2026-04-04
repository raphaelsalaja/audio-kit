import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AdjustContrast({
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
          d="M9 17C13.4182 17 17 13.4183 17 9C17 4.58168 13.4182 1 9 1C4.58179 1 1 4.58168 1 9C1 13.4183 4.58179 17 9 17Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17 9C17 13.4183 13.4182 17 9 17V1C13.4182 1 17 4.58168 17 9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AdjustContrast;
