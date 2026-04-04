import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleNumberOne({
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
        <circle
          cx="9"
          cy="9"
          fill={secondaryfill}
          opacity=".4"
          r="8"
          strokeWidth="0"
        />
        <path
          d="m9.25,13c-.4141,0-.75-.3359-.75-.75v-4.7212c-.3916.248-.8687.4614-1.4336.5698-.4067.0752-.8003-.189-.8779-.5957s.189-.7998.5957-.8779c1.2036-.2305,1.792-1.209,1.8164-1.2505.1724-.2915.5195-.4351.8452-.3457.3262.0889.5542.3828.5542.7212v6.5c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleNumberOne;
