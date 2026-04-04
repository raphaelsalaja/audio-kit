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
          d="m13.874,9.9253c-.3613-1.1519-1.416-1.9253-2.624-1.9253h-1.5v-3c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v3h-1.5c-1.5166,0-2.75,1.2334-2.75,2.75v2c0,.4141.3359.75.75.75s.75-.3359.75-.75v-2c0-.6895.5605-1.25,1.25-1.25h4.5c.5493,0,1.0288.3516,1.1934.8745.1235.3945.5439.6152.9399.4907.3955-.124.6152-.5449.4907-.9399Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m14.311,14.4102l1.3096-1.3096c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-1.3096,1.3096-1.3096-1.3096c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l1.3096,1.3096-1.3096,1.3096c-.293.293-.293.7676,0,1.0605.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197l1.3096-1.3096,1.3096,1.3096c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-1.3096-1.3096Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6.5,3.5c0-1.3802,1.1198-2.5,2.5-2.5s2.5,1.1198,2.5,2.5-1.1198,2.5-2.5,2.5-2.5-1.1198-2.5-2.5Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m2.25,14.5c0-1.3802,1.1198-2.5,2.5-2.5s2.5,1.1198,2.5,2.5-1.1198,2.5-2.5,2.5-2.5-1.1198-2.5-2.5Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default WorkflowDenied;
