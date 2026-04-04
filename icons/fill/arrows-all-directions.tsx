import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsAllDirections({
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
        <circle cx="9" cy="9" fill={secondaryfill} r="3" />
        <path
          d="M2.25,6.5c.414,0,.75-.336,.75-.75v-1.689l1.97,1.97c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.97-1.97h1.689c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H2.25c-.414,0-.75,.336-.75,.75v3.5c0,.414,.336,.75,.75,.75Z"
          fill={fill}
        />
        <path
          d="M15.75,1.5h-3.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.689l-1.97,1.97c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l1.97-1.97v1.689c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V2.25c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M15.75,11.5c-.414,0-.75,.336-.75,.75v1.689l-1.97-1.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.97,1.97h-1.689c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.5c.414,0,.75-.336,.75-.75v-3.5c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M5.75,15h-1.689l1.97-1.97c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-1.97,1.97v-1.689c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v3.5c0,.414,.336,.75,.75,.75h3.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsAllDirections;
