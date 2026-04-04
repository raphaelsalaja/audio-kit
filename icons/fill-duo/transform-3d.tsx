import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Transform3d({
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
          d="m14.3813,2.5952c-.3931-.3335-.9077-.4741-1.4194-.3911l-8.4995,1.417c-.8472.1406-1.4624.8667-1.4624,1.7261v7.3057c0,.8594.6152,1.5854,1.4619,1.7261l8.5005,1.417c.0962.0161.1924.0239.2886.0239.4111,0,.8115-.1445,1.1304-.415.3931-.333.6187-.8198.6187-1.3354V3.9307c0-.5156-.2256-1.0024-.6187-1.3354Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m8.25,17c-.4141,0-.75-.3359-.75-.75V1.75c0-.4141.3359-.75.75-.75s.75.3359.75.75v14.5c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.75,9.75H2.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h13.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Transform3d;
