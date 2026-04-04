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
        <path
          d="m9,1C4.5889,1,1,4.5889,1,9s3.5889,8,8,8,8-3.5889,8-8S13.4111,1,9,1Zm1,11.25c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-4.7212c-.3916.248-.8687.4614-1.4336.5698-.4067.0742-.8003-.1885-.8779-.5957-.0776-.4067.189-.7998.5957-.8779,1.2036-.2305,1.792-1.209,1.8164-1.2505.1724-.292.5195-.4336.8452-.3457.3262.0889.5542.3828.5542.7212v6.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleNumberOne;
