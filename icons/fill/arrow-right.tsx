import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowRight({
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
          d="M15,9.75H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H15c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M11,14c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l3.72-3.72-3.72-3.72c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l4.25,4.25c.293,.293,.293,.768,0,1.061l-4.25,4.25c-.146,.146-.338,.22-.53,.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowRight;
