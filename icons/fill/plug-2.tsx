import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Plug2({
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
          d="M9.47,9.97l-1.025,1.025-1.439-1.44,1.025-1.025c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-1.025,1.025-.311-.311c-.682-.683-1.793-.683-2.475,0l-.28,.28c-.89,.889-1.379,2.071-1.379,3.328,0,1.003,.323,1.95,.9,2.747l-1.181,1.181c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l1.181-1.181c.796,.577,1.743,.9,2.746,.9,1.258,0,2.439-.49,3.328-1.379l.28-.28c.683-.682,.683-1.792,0-2.475l-.311-.311,1.025-1.025c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
          fill={fill}
        />
        <path
          d="M15.72,1.22l-1.181,1.181c-.796-.577-1.743-.9-2.746-.9-1.258,0-2.439,.49-3.328,1.379l-.28,.28c-.683,.682-.683,1.792,0,2.475l4.182,4.182c.341,.341,.789,.512,1.237,.512s.896-.17,1.237-.512l.28-.28c.89-.889,1.379-2.071,1.379-3.328,0-1.003-.323-1.95-.9-2.747l1.181-1.181c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Plug2;
