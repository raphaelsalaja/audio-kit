import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClockTime({
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
        <circle cx="15.5" cy="13" fill={fill} r="1" strokeWidth="0" />
        <path
          d="m9,1C4.589,1,1,4.5889,1,9s3.589,8,8,8c1.9658,0,3.7656-.7158,5.16-1.8967-.6953-.4446-1.16-1.2188-1.16-2.1033,0-1.3784,1.1216-2.5,2.5-2.5.4666,0,.8986.1367,1.2728.3601.1432-.5981.2272-1.2188.2272-1.8601,0-4.4111-3.589-8-8-8Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m11.8608,10.9805c-.1455.2104-.3794.3232-.6172.3232-.1475,0-.2964-.043-.4263-.1333l-2.2441-1.5537c-.2026-.1401-.3232-.3706-.3232-.6167v-4.25c0-.4141.3359-.75.75-.75s.75.3359.75.75v3.8569l1.9209,1.3301c.3408.2358.4258.7031.1899,1.0435Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ClockTime;
