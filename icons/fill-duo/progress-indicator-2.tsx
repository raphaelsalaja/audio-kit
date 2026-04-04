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
          d="m9,17c-4.4111,0-8-3.5889-8-8,0-2.1367.832-4.1455,2.3428-5.6567.293-.293.7676-.293,1.0605,0,.293.2925.293.7676,0,1.0605-1.2275,1.228-1.9033,2.8604-1.9033,4.5962,0,3.584,2.916,6.5,6.5,6.5s6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5c-.4375,0-.875.0435-1.2998.1294-.4023.082-.8018-.1797-.8838-.5859s.1807-.8018.5869-.8838c.5225-.106,1.0596-.1597,1.5967-.1597,4.4111,0,8,3.5889,8,8s-3.5889,8-8,8Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m9,9.75c-.1924,0-.3838-.0732-.5303-.2197L3.3428,4.4038c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l5.127,5.1265c.293.293.293.7676,0,1.0605-.1465.1465-.3379.2197-.5303.2197Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ProgressIndicator2;
