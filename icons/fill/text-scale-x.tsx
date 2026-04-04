import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextScaleX({
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
          d="M13.25,1H4.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.5V11.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V2.5h3.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M16.78,13.72l-2-2c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l.72,.72H3.561l.72-.72c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-2,2c-.293,.293-.293,.768,0,1.061l2,2c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-.72-.72H14.439l-.72,.72c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2-2c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TextScaleX;
