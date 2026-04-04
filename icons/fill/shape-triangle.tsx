import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShapeTriangle({
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
          d="M16.437,12.516L11.011,3.12c-.419-.727-1.171-1.161-2.011-1.161s-1.592,.434-2.011,1.161L1.563,12.516c-.42,.728-.42,1.596,0,2.323s1.172,1.161,2.011,1.161H14.425c.839,0,1.591-.434,2.011-1.161s.42-1.595,0-2.323Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShapeTriangle;
