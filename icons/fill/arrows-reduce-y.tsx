import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsReduceY({
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
          d="M9.53,10.22c-.293-.293-.768-.293-1.061,0l-3.25,3.25c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l1.97-1.97v3.689c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-3.689l1.97,1.97c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.25-3.25Z"
          fill={secondaryfill}
        />
        <path
          d="M8.47,7.78c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.25-3.25c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-1.97,1.97V1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v3.689l-1.97-1.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.25,3.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsReduceY;
