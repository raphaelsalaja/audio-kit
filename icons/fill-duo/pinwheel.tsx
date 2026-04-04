import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pinwheel({
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
          d="m9.1406,9.75l1.5855,3.1708c.5757.2817,1.2146.4542,1.8989.4542,2.4126,0,4.375-1.9624,4.375-4.375,0-.4141-.3359-.75-.75-.75h-7.3906l-1.5855-3.1708c-.5757-.2817-1.2146-.4542-1.8989-.4542-2.4126,0-4.375,1.9624-4.375,4.375,0,.4141.3359.75.75.75h7.3906Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m9.75,8.8594l3.1708-1.5855c.2817-.5757.4542-1.2146.4542-1.8989,0-2.4126-1.9624-4.375-4.375-4.375-.4141,0-.75.3359-.75.75v7.3906l-3.1708,1.5855c-.2817.5757-.4542,1.2146-.4542,1.8989,0,2.4126,1.9624,4.375,4.375,4.375.4141,0,.75-.3359.75-.75v-7.3906Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Pinwheel;
