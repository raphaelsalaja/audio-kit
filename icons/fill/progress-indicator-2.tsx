import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ProgressIndicator2({
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
          d="m9,17c-4.4111,0-8-3.5889-8-8,0-2.1367.832-4.1455,2.3428-5.6567.2812-.2812.7793-.2812,1.0605,0l5.127,5.1265c.293.293.293.7676,0,1.0605s-.7676.293-1.0605,0L3.9033,4.9644c-.9102,1.1445-1.4033,2.5522-1.4033,4.0356,0,3.584,2.916,6.5,6.5,6.5s6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5c-.4375,0-.875.0435-1.2998.1294-.4023.0801-.8018-.1802-.8838-.5859-.082-.4062.1807-.8018.5869-.8838.5225-.106,1.0596-.1597,1.5967-.1597,4.4111,0,8,3.5889,8,8s-3.5889,8-8,8Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ProgressIndicator2;
