import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareNumberOne({
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
          d="m13.25,2H4.75c-1.5166,0-2.75,1.2334-2.75,2.75v8.5c0,1.5166,1.2334,2.75,2.75,2.75h8.5c1.5166,0,2.75-1.2334,2.75-2.75V4.75c0-1.5166-1.2334-2.75-2.75-2.75Zm-3.25,10.25c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-4.7212c-.3916.248-.8687.4614-1.4336.5698-.4082.0742-.7998-.1885-.8779-.5957-.0776-.4067.189-.7998.5957-.8779,1.2036-.2305,1.792-1.209,1.8164-1.2505.1719-.292.521-.4336.8452-.3457.3262.0889.5542.3828.5542.7212v6.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SquareNumberOne;
