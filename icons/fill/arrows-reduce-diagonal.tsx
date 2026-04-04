import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsReduceDiagonal({
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
          d="M15.25,6.5h-2.689l3.22-3.22c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-3.22,3.22V2.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75V7.25c0,.414,.336,.75,.75,.75h4.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M7.25,10H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2.689l-3.22,3.22c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.22-3.22v2.689c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-4.5c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ArrowsReduceDiagonal;
