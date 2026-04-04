import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MonitorSettings({
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
          d="m14.2596,13.5c1.5125-.005,2.7404-1.235,2.7404-2.749v-6.001c0-1.517-1.233-2.75-2.75-2.75H3.75c-1.517,0-2.75,1.233-2.75,2.75v6c0,1.517,1.233,2.75,2.75,2.75h10.5096Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m8.25,14.53c-.923.06-1.839.225-2.726.504-.395.125-.614.545-.489.941.124.394.541.612.94.4901,1.959-.617,4.09-.617,6.049,0,.075.0229.151.035.226.035.318,0,.614-.205.715-.524.125-.395-.095-.816-.489-.941-.885-.28-1.802-.4449-2.726-.504v-1.031h-1.5v1.0299Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.25,8.5h-3.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h3.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7.25,8.5h-2.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7.25,10.5c-.4141,0-.75-.3359-.75-.75v-4c0-.4141.3359-.75.75-.75s.75.3359.75.75v4c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default MonitorSettings;
