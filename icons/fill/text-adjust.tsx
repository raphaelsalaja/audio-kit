import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextAdjust({
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
          d="m5.1592,11.4492c.3828.1484.8203-.0415.9702-.4282l.7839-2.021h4.1735l.7839,2.021c.1152.2974.3989.479.6992.479.0903,0,.1821-.0161.271-.0508.3862-.1499.5781-.5845.4282-.9702L9.9722,1.979c-.1118-.2891-.3896-.479-.6992-.479h-.5459c-.3096,0-.5874.1899-.6992.479l-3.2969,8.5c-.1499.3857.042.8203.4282.9702Zm3.8408-7.8291l1.5049,3.8799h-3.0098l1.5049-3.8799Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.25,13.5h-3.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75h3.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m8.75,11.75c-.4141,0-.75.3359-.75.75v1H2.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h5.25v1c0,.4141.3359.75.75.75s.75-.3359.75-.75v-3.5c0-.4141-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default TextAdjust;
