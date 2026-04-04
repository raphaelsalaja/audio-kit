import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsTransaction({
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
          d="M3.561,5h3.689c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H3.561l1.22-1.22c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0L1.22,3.72c-.293,.293-.293,.768,0,1.061l2.5,2.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.22-1.22Z"
          fill={fill}
        />
        <path
          d="M16.78,13.22l-2.5-2.5c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.22,1.22h-3.689c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.689l-1.22,1.22c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.5-2.5c.293-.293,.293-.768,0-1.061Z"
          fill={fill}
        />
        <circle cx="9" cy="9" fill={secondaryfill} r="3.25" />
      </g>
    </svg>
  );
}

export default ArrowsTransaction;
