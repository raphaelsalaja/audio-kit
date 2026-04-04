import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowThroughLineUp({
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
          d="M15.25,10.5h-3.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M9,10.5H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h6.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M9.53,2.22c-.293-.293-.768-.293-1.061,0l-3.5,3.5c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l2.22-2.22V15.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V4.561l2.22,2.22c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.5-3.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowThroughLineUp;
