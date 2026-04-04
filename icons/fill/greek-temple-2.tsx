import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GreekTemple2({
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
          d="m2.75,13.5h12.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-.25v-3.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v3.75h-2v-3.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v3.75h-2v-3.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v3.75h-2v-3.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v3.75h-.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.75,15H2.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75h13.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16.1538,5.3159l-5.9512-3.4814c-.7422-.4336-1.6631-.4336-2.4053,0L1.8472,5.3154c-.5225.3052-.8472.8706-.8472,1.4761,0,.9424.7671,1.7095,1.7095,1.7095l6.2905-.001,6.2905.001c.9424,0,1.7095-.7671,1.7095-1.7095,0-.6055-.3247-1.1709-.8462-1.4756Zm-7.1538.9341c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default GreekTemple2;
