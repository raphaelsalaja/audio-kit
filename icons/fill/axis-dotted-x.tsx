import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AxisDottedX({
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
          d="M16.768,10.22l-2.475-2.475c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.195,1.195H7.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h7.177l-1.195,1.195c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.475-2.475c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
        <path
          d="M6.75,2.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
        />
        <path
          d="M6.75,5.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
        />
        <path
          d="M6.75,8.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
        />
        <circle cx="1.25" cy="16.75" fill={fill} r=".75" />
        <circle cx="3.25" cy="14.75" fill={fill} r=".75" />
        <circle cx="5.25" cy="12.75" fill={fill} r=".75" />
      </g>
    </svg>
  );
}

export default AxisDottedX;
