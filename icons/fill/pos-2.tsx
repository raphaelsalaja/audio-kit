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
          d="m11.75,1h-5.5c-1.2402,0-2.25,1.0093-2.25,2.25v2.5c0,.4141.3359.75.75.75s.75-.3359.75-.75v-2.5c0-.4136.3369-.75.75-.75h3.25v3.25c0,.4141.3359.75.75.75s.75-.3359.75-.75v-3.25h.75c.4131,0,.75.3364.75.75v2.5c0,.4141.3359.75.75.75s.75-.3359.75-.75v-2.5c0-1.2407-1.0098-2.25-2.25-2.25Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m13.25,7.5H4.75c-1.5166,0-2.75,1.2334-2.75,2.75v3.2661c0,.2686.0625.5376.1816.7764l.543,1.0972c.0166.0332.0254.0713.0254.1099v.7505c0,.4141.3359.75.75.75h2c0-.4141.3358-.75.75-.75s.75.3359.75.75h1.25c0-.4141.3358-.75.75-.75s.75.3359.75.75h1.25c0-.4141.3358-.75.75-.75s.75.3359.75.75h2c.4141,0,.75-.3359.75-.75v-.7505c0-.0386.0088-.0767.0254-.1104l.543-1.0962c.1191-.2393.1816-.5083.1816-.7769v-3.2661c0-1.5166-1.2334-2.75-2.75-2.75Zm-.25,5.75c0,.4141-.3359.75-.75.75h-6.5c-.4141,0-.75-.3359-.75-.75v-2c0-.4141.3359-.75.75-.75h6.5c.4141,0,.75.3359.75.75v2Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Pos2;
