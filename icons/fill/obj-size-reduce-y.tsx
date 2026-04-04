import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjSizeReduceY({
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
          height="6"
          width="16"
          fill={secondaryfill}
          rx="1.75"
          ry="1.75"
          x="1"
          y="6"
        />
        <path
          d="M8.47,4.28c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.25-2.25c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-1.72,1.72-1.72-1.72c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l2.25,2.25Z"
          fill={fill}
        />
        <path
          d="M9.53,13.72c-.293-.293-.768-.293-1.061,0l-2.25,2.25c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l1.72-1.72,1.72,1.72c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-2.25-2.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ObjSizeReduceY;
