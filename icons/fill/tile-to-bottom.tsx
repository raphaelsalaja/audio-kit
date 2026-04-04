import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TileToBottom({
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
          d="M17,12.75V5.25c0-1.519-1.231-2.75-2.75-2.75h-3.5c-.552,0-1,.448-1,1v2.439l.72-.72c.146-.146,.338-.22,.53-.22s.384,.073,.53,.22c.293,.293,.293,.768,0,1.061l-2,2c-.293,.293-.768,.293-1.061,0l-2-2c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l.72,.72V3.5c0-.552-.448-1-1-1H3.75c-1.519,0-2.75,1.231-2.75,2.75v7.5c0,1.519,1.231,2.75,2.75,2.75H14.25c1.519,0,2.75-1.231,2.75-2.75Zm-1.5,0c0,.69-.56,1.25-1.25,1.25H3.75c-.69,0-1.25-.56-1.25-1.25v-2c0-.69,.56-1.25,1.25-1.25H14.25c.69,0,1.25,.56,1.25,1.25v2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TileToBottom;
