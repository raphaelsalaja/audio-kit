import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowLeftToLine({
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
          d="M15.25,8.25H7.561l2.72-2.72c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-4,4c-.293,.293-.293,.768,0,1.061l4,4c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-2.72-2.72h7.689c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M2.75,2c-.414,0-.75,.336-.75,.75V15.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V2.75c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ArrowLeftToLine;
