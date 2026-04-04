import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseDashboard2({
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
          d="m15.3086,5.353l-5.249-3.9897c-.623-.4746-1.4941-.4741-2.1182-.0005l-5.25,3.9897c-.4326.3286-.6914.8496-.6914,1.3936v7.5039c0,1.5166,1.2334,2.75,2.75,2.75h8.5c1.5166,0,2.75-1.2334,2.75-2.75v-7.5039c0-.5439-.2588-1.0649-.6914-1.3931Zm-7.0586,8.397c0,.5513-.4487,1-1,1h-1.25c-.5513,0-1-.4487-1-1v-1.25c0-.5513.4487-1,1-1h1.25c.5513,0,1,.4487,1,1v1.25Zm0-4.75c0,.5513-.4487,1-1,1h-1.25c-.5513,0-1-.4487-1-1v-1.25c0-.5513.4487-1,1-1h1.25c.5513,0,1,.4487,1,1v1.25Zm4.75,4.75c0,.5513-.4487,1-1,1h-1.25c-.5513,0-1-.4487-1-1v-1.25c0-.5513.4487-1,1-1h1.25c.5513,0,1,.4487,1,1v1.25Zm0-4.75c0,.5513-.4487,1-1,1h-1.25c-.5513,0-1-.4487-1-1v-1.25c0-.5513.4487-1,1-1h1.25c.5513,0,1,.4487,1,1v1.25Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default HouseDashboard2;
