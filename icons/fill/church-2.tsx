import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Church2({
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
          d="m15.3096,5.353l-5.25-3.9897c-.623-.4746-1.4941-.4731-2.1191-.0005l-5.25,3.9907c-.4326.3291-.6904.8496-.6904,1.3926v7.5039c0,1.5166,1.2334,2.75,2.75,2.75h3.5v-7.5h-2c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2v-2.25c0-.4141.3359-.75.75-.75s.75.3359.75.75v2.25h2c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-2v7.5h3.5c1.5166,0,2.75-1.2334,2.75-2.75v-7.5039c0-.543-.2578-1.0635-.6904-1.3931Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Church2;
