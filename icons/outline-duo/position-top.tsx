import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PositionTop({
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
          d="m14.75,2.75H3.25c-.2761,0-.5.2239-.5.5v2.5c0,.2761.2239.5.5.5h11.5c.2761,0,.5-.2239.5-.5v-2.5c0-.2761-.2239-.5-.5-.5Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m14.25,2.75H3.75c-.5523,0-1,.4477-1,1v1.5c0,.5523.4477,1,1,1h10.5c.5523,0,1-.4477,1-1v-1.5c0-.5523-.4477-1-1-1Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.25,9.75c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m2.75,9.75c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,16c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m2.75,12.875c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m2.75,16c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.25,12.875c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.25,16c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.125,16c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m5.875,16c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default PositionTop;
