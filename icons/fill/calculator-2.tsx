import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Calculator2({
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
          d="M7.25,4.5h-1.75v-1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.75h-1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.75v1.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.75h1.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M7.298,10.684c-.293-.293-.768-.293-1.061,0l-1.487,1.488-1.487-1.488c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.487,1.488-1.487,1.488c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l1.487-1.488,1.487,1.488c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.487-1.488,1.487-1.488c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
        <path
          d="M10.75,6h5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.75,11h-5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M15.75,14h-5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Calculator2;
