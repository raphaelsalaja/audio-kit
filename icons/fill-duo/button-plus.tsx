import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ButtonPlus({
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
          d="m8,12.75c0-1.2407,1.0093-2.25,2.25-2.25h.25v-.25c0-1.2407,1.0093-2.25,2.25-2.25s2.25,1.0093,2.25,2.25v.25h.25c.6798,0,1.2828.3093,1.6957.7874.0346-.1741.0543-.3533.0543-.5374v-3.5c0-1.5166-1.2334-2.75-2.75-2.75H3.75c-1.5166,0-2.75,1.2334-2.75,2.75v3.5c0,1.5166,1.2334,2.75,2.75,2.75h4.3882c-.084-.2358-.1382-.4858-.1382-.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m15.25,12h-1.75v-1.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.75h-1.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1.75v1.75c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1.75h1.75c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ButtonPlus;
