import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsDiagonalOppositeDirection({
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
          d="M14.72,6.72l-7.22,7.22v-2.7c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v4.51c0,.414,.336,.75,.75,.75h4.51c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-2.7l7.22-7.22c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
          fill={secondaryfill}
        />
        <path
          d="M10.5,6.76c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V2.25c0-.414-.336-.75-.75-.75H6.74c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2.7L2.22,10.22c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l7.22-7.22v2.7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsDiagonalOppositeDirection;
