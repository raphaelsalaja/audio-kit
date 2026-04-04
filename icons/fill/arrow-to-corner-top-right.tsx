import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowToCornerTopRight({
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
          d="M10.25,7H4.74c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.7L2.22,14.72c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l6.22-6.22v3.7c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V7.75c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25,2H3.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H13.25c.689,0,1.25,.561,1.25,1.25V14.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V4.75c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowToCornerTopRight;
