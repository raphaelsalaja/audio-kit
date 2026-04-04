import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RemoteControl({
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
          d="m11.75,8h-5.5c-1.5166,0-2.75,1.2334-2.75,2.75v5.5c0,.4141.3359.75.75.75h9.5c.4141,0,.75-.3359.75-.75v-5.5c0-1.5166-1.2334-2.75-2.75-2.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m12.1816,6.8481c-.1924,0-.3838-.0732-.5303-.2197-1.416-1.416-3.8867-1.416-5.3027,0-.293.293-.7676.293-1.0605,0-.293-.2925-.293-.7676,0-1.0605.9912-.9917,2.3096-1.5376,3.7119-1.5376s2.7207.5459,3.7119,1.5376c.293.293.293.7681,0,1.0605-.1465.1465-.3389.2197-.5303.2197Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.3037,4.7271c-.1924,0-.3838-.0732-.5303-.2197-1.2744-1.2749-2.9697-1.9771-4.7725-1.9771-1.8037,0-3.499.7021-4.7734,1.9771-.293.293-.7676.293-1.0605,0s-.293-.7676,0-1.0605c1.5576-1.5586,3.6299-2.4165,5.834-2.4165s4.2754.8579,5.833,2.4165c.293.293.293.7676,0,1.0605-.1465.1465-.3379.2197-.5303.2197Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="7.25" cy="11.5" fill={fill} r="1" strokeWidth="0" />
        <circle cx="10.75" cy="11.5" fill={fill} r="1" strokeWidth="0" />
        <circle cx="7.25" cy="15" fill={fill} r="1" strokeWidth="0" />
        <circle cx="10.75" cy="15" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default RemoteControl;
