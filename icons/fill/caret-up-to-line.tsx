import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretUpToLine({
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
          d="M14.75,2H3.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H14.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M10.478,5.93c-.323-.509-.875-.812-1.478-.812s-1.155,.304-1.478,.812L2.84,13.313c-.341,.539-.362,1.222-.055,1.781s.895,.906,1.533,.906H13.682c.638,0,1.226-.347,1.533-.906s.287-1.242-.055-1.781l-4.682-7.383Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CaretUpToLine;
