import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineMinimizeDiagonal2({
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
          d="M14.186,13.125l1.419-1.419c.286-.287,.371-.715,.216-1.089-.156-.375-.519-.617-.924-.617h-3.896c-.552,0-1,.449-1,1v3.896c0,.406,.242,.769,.618,.924,.124,.051,.255,.076,.383,.076,.261,0,.515-.102,.706-.293l1.418-1.418,1.595,1.595c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.595-1.595Z"
          fill={secondaryfill}
        />
        <path
          d="M7.382,2.179c-.376-.156-.804-.069-1.089,.217l-1.418,1.418-1.595-1.595c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.595,1.595-1.419,1.419c-.286,.287-.371,.715-.216,1.089,.156,.375,.519,.617,.924,.617h3.896c.552,0,1-.449,1-1V3.104c0-.406-.242-.769-.618-.924Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineMinimizeDiagonal2;
