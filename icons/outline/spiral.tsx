import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Spiral({
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
          d="m2.25,6.6926c2.2222-3.6157,6.9547-4.7454,10.5705-2.5233,2.8926,1.7777,3.7963,5.5638,2.0186,8.4564-1.4222,2.3141-4.451,3.0371-6.7651,1.6149-1.8513-1.1378-2.4297-3.5608-1.2919-5.4121.9102-1.481,2.8487-1.9437,4.3297-1.0335,1.1848.7282,1.555,2.2789.8268,3.4637-.5825.9478-1.8231,1.244-2.771.6615"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Spiral;
