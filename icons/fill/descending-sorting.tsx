import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DescendingSorting({
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
          d="M14.72,12.22l-1.22,1.22V6.25c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v7.189l-1.22-1.22c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l2.5,2.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.5-2.5c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
          fill={secondaryfill}
        />
        <path
          d="M10,9.75c0-.414-.336-.75-.75-.75H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h6.5c.414,0,.75-.336,.75-.75Z"
          fill={fill}
        />
        <path
          d="M2.75,7h6.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={fill}
        />
        <path
          d="M2.75,3.5H12.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DescendingSorting;
