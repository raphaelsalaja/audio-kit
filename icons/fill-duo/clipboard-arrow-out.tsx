import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClipboardArrowOut({
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
          d="m5.25,2c-1.5192,0-2.75,1.2308-2.75,2.75v9.5c0,1.5192,1.2308,2.75,2.75,2.75h7.5c1.5192,0,2.75-1.2308,2.75-2.75V4.75c0-1.5192-1.2308-2.75-2.75-2.75h-7.5Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m5.5,2.25c0-.9662.7838-1.75,1.75-1.75h3.5c.9662,0,1.75.7838,1.75,1.75s-.7838,1.75-1.75,1.75h-3.5c-.9662,0-1.75-.7838-1.75-1.75Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m15.2803,9.7197l-2.75-2.75c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l1.4697,1.4697h-4.6895c-.4141,0-.75.3359-.75.75s.3359.75.75.75h4.6895l-1.4697,1.4697c-.293.293-.293.7676,0,1.0605.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l2.75-2.75c.293-.293.293-.7676,0-1.0605Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ClipboardArrowOut;
