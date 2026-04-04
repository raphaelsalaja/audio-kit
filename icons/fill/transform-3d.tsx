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
          d="m10.5,11.25v4.1355l2.4624.4104c.0962.0161.1924.0239.2886.0239.4111,0,.8115-.1445,1.1304-.415.3931-.333.6187-.8198.6187-1.3354v-2.8193h-4.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15,9V3.9307c0-.5156-.2256-1.0024-.6187-1.3354-.3931-.3335-.9077-.4761-1.4194-.3911l-2.4619.4104v6.3855h4.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8,3.0315l-3.5376.5896c-.8472.1406-1.4624.8667-1.4624,1.7261v3.6528h5V3.0315Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8,11.25H3v1.4028c0,.8594.6152,1.5854,1.4619,1.7261l3.5381.5896v-3.7185Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,9.75V1.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v8h1.5Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m7.5,11.25v5c0,.4141.3359.75.75.75s.75-.3359.75-.75v-5h-1.5Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9,8.25H2.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75h6.75v-1.5Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.75,8.25h-5.25v1.5h5.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Transform3d;
