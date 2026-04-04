import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WorkflowDenied({
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
          d="m13.7202,9.5405c-.4653-.9502-1.4121-1.5405-2.4702-1.5405h-1.5v-1.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.75h-1.5c-1.5161,0-2.75,1.2334-2.75,2.75v1c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1c0-.6895.5605-1.25,1.25-1.25h4.5c.481,0,.9116.2686,1.1235.7007.1821.3721.6309.5269,1.0034.3433.3721-.1821.5259-.6313.3433-1.0034Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m14.311,14.0005l1.3096-1.3096c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-1.3096,1.3096-1.3096-1.3096c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l1.3096,1.3096-1.3096,1.3096c-.293.293-.293.7676,0,1.0605.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197l1.3096-1.3096,1.3096,1.3096c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-1.3096-1.3096Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="4.75" cy="14" fill={fill} r="3" strokeWidth="0" />
        <circle cx="9" cy="4" fill={fill} r="3" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default WorkflowDenied;
