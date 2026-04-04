import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMinimizeDiagonal22({
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
          d="m10.896,6h-3.896c-.551,0-1,.449-1,1v3.896c0,.406.243.769.618.924.125.051.254.076.383.076.26,0,.515-.102.706-.293l3.896-3.896c.287-.287.372-.715.217-1.09s-.518-.617-.924-.617Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m5.383.18c-.375-.156-.802-.071-1.09.217L.396,4.293c-.287.287-.372.715-.217,1.09s.518.617.924.617h3.896c.551,0,1-.449,1-1V1.104c0-.406-.242-.769-.617-.924Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CaretMinimizeDiagonal22;
