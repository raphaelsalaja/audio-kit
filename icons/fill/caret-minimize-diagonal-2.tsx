import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMinimizeDiagonal2({
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
          d="M7.883,1.93c-.375-.157-.803-.07-1.09,.217L2.146,6.793c-.287,.287-.372,.715-.217,1.09s.518,.617,.924,.617H7.5c.551,0,1-.449,1-1V2.854c0-.406-.242-.769-.617-.924Z"
          fill={fill}
        />
        <path
          d="M15.146,9.5h-4.646c-.551,0-1,.449-1,1v4.646c0,.406,.242,.769,.617,.924,.125,.052,.255,.077,.384,.077,.26,0,.514-.102,.706-.293l4.646-4.646c.287-.287,.372-.715,.217-1.09s-.518-.617-.924-.617Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CaretMinimizeDiagonal2;
