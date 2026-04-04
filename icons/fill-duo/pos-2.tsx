import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pos2({
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
          d="m13.25,7.5H4.75c-1.5166,0-2.75,1.2334-2.75,2.75v3.2661c0,.2686.0625.5376.1816.7764l.543,1.0972c.0166.0332.0254.0713.0254.1099v.7505c0,.4141.3359.75.75.75h11c.4141,0,.75-.3359.75-.75v-.7505c0-.0386.0088-.0767.0254-.1104l.543-1.0962c.1191-.2393.1816-.5083.1816-.7769v-3.2661c0-1.5166-1.2334-2.75-2.75-2.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m11.75,16.25c-.4142,0-.75.3359-.75.75h1.5c0-.4141-.3358-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,16.25c-.4142,0-.75.3359-.75.75h1.5c0-.4141-.3358-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6.25,16.25c-.4142,0-.75.3359-.75.75h1.5c0-.4141-.3358-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.75,1h-.75v5h2.25c.4141,0,.75-.3359.75-.75v-2c0-1.2407-1.0098-2.25-2.25-2.25Z"
          fill={secondaryfill}
          opacity=".2"
          strokeWidth="0"
        />
        <path
          d="m6.25,1c-1.2402,0-2.25,1.0093-2.25,2.25v2c0,.4141.3359.75.75.75h4.75V1h-3.25Z"
          fill={secondaryfill}
          opacity=".2"
          strokeWidth="0"
        />
        <rect
          height="3.5"
          width="8"
          fill={fill}
          rx=".75"
          ry=".75"
          strokeWidth="0"
          x="5"
          y="10.5"
        />
        <rect
          height="5"
          width="1.5"
          fill={fill}
          strokeWidth="0"
          x="9.5"
          y="1"
        />
      </g>
    </svg>
  );
}

export default Pos2;
