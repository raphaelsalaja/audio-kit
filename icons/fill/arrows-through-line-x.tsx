import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsThroughLineX({
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
          d="M9,16.5c-.414,0-.75-.336-.75-.75v-3.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v3.75c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M9,9.75c-.414,0-.75-.336-.75-.75V2.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v6.75c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.78,5.47c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.72,1.72H3.561l1.72-1.72c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-3,3c-.293,.293-.293,.768,0,1.061l3,3c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.72-1.72H14.439l-1.72,1.72c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3-3c.293-.293,.293-.768,0-1.061l-3-3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsThroughLineX;
