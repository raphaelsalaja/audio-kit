import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjSizeReduceX({
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
        <rect
          height="16"
          width="6"
          fill={secondaryfill}
          rx="1.75"
          ry="1.75"
          x="6"
          y="1"
        />
        <path
          d="M15.311,9l1.72-1.72c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-2.25,2.25c-.293,.293-.293,.768,0,1.061l2.25,2.25c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.72-1.72Z"
          fill={fill}
        />
        <path
          d="M2.03,6.22c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.72,1.72-1.72,1.72c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.25-2.25c.293-.293,.293-.768,0-1.061l-2.25-2.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ObjSizeReduceX;
