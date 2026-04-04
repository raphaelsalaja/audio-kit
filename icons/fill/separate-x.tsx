import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SeparateX({
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
          d="M4.78,5.97c-.293-.293-.768-.293-1.061,0l-2.5,2.5c-.293,.293-.293,.768,0,1.061l2.5,2.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.97-1.97,1.97-1.97c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
        <path
          d="M7.25,2c-.414,0-.75,.336-.75,.75V15.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V2.75c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M10.75,2c-.414,0-.75,.336-.75,.75V15.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V2.75c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M14.28,5.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.97,1.97-1.97,1.97c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.5-2.5c.293-.293,.293-.768,0-1.061l-2.5-2.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SeparateX;
