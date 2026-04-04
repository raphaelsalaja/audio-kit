import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowThroughLineRight({
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
          d="M8.25,16c-.414,0-.75-.336-.75-.75v-3.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v3.25c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M8.25,9.75c-.414,0-.75-.336-.75-.75V2.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v6.25c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M12.28,4.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l2.22,2.22H2.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H13.439l-2.22,2.22c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.5-3.5c.293-.293,.293-.768,0-1.061l-3.5-3.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowThroughLineRight;
