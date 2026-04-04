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
          d="m12.4756,15.0347c-.8867-.2793-1.8031-.4446-2.7256-.5042v-1.7805c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.7805c-.9228.0596-1.8392.2249-2.7256.5042-.3945.1245-.6143.5454-.4893.9409.124.394.541.6123.9404.4897,1.958-.6167,4.0869-.6177,6.0488,0,.0752.0234.1514.0347.2256.0347.3193,0,.6143-.2046.7158-.5249.124-.395-.0957-.8159-.4902-.9404Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m14.25,2H3.75c-1.5166,0-2.75,1.2334-2.75,2.75v6c0,1.5166,1.2334,2.75,2.75,2.75h10.5c1.5166,0,2.75-1.2334,2.75-2.75v-6c0-1.5166-1.2334-2.75-2.75-2.75Zm-6.25,7.75c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-1.25h-1.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h1.75v-1.25c0-.4141.3359-.75.75-.75s.75.3359.75.75v4Zm5.25-1.25h-3.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h3.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default MonitorSettings;
