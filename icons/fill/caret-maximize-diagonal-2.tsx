import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMaximizeDiagonal2({
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
          d="M9.57,3.617c-.156-.375-.519-.617-.924-.617H4c-.552,0-1,.449-1,1v4.646c0,.406,.242,.769,.618,.924,.124,.051,.255,.076,.383,.076,.261,0,.515-.102,.706-.293l4.647-4.647c.286-.287,.371-.715,.216-1.089Z"
          fill={fill}
        />
        <path
          d="M14.382,8.429c-.377-.156-.804-.068-1.089,.217l-4.647,4.647c-.286,.287-.371,.715-.216,1.089,.156,.375,.519,.617,.924,.617h4.646c.552,0,1-.449,1-1v-4.646c0-.406-.242-.769-.618-.924Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CaretMaximizeDiagonal2;
