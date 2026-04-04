import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BranchOut({
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
          d="M4,9.5c.192,0,.384-.073,.53-.22l2.414-2.414c.232-.233,.555-.366,.884-.366h2.111l-1.47,1.47c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.75-2.75c.293-.293,.293-.768,0-1.061l-2.75-2.75c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.47,1.47h-2.111c-.734,0-1.425,.286-1.944,.806l-2.414,2.414c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M16.78,10.72l-2.75-2.75c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.47,1.47H.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H14.439l-1.47,1.47c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.75-2.75c.293-.293,.293-.768,0-1.061Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BranchOut;
