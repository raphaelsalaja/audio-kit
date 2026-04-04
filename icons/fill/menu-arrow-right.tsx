import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MenuArrowRight({
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
          d="M13.03,5.22c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.97,1.97H2.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H13.939l-1.97,1.97c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.25-3.25c.293-.293,.293-.768,0-1.061l-3.25-3.25Z"
          fill={secondaryfill}
        />
        <path
          d="M9.25,14H2.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h7c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M2.25,4h7c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H2.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MenuArrowRight;
