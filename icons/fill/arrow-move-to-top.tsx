import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowMoveToTop({
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
          d="M15.25,14.5H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H15.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M15.25,9.5h-3.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M2.75,11h3.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={fill}
        />
        <path
          d="M6.28,6.53l1.97-1.97v7.689c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V4.561l1.97,1.97c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.25-3.25c-.293-.293-.768-.293-1.061,0l-3.25,3.25c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ArrowMoveToTop;
