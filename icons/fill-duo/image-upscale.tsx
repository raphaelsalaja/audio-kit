import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageUpscale({
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
          d="m2.75,5.5c-.4141,0-.75-.3359-.75-.75,0-1.5166,1.2334-2.75,2.75-2.75.4141,0,.75.3359.75.75s-.3359.75-.75.75c-.6895,0-1.25.5605-1.25,1.25,0,.4141-.3359.75-.75.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m13.25,16c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75c.6895,0,1.25-.5605,1.25-1.25,0-.4141.3359-.75.75-.75s.75.3359.75.75c0,1.5166-1.2334,2.75-2.75,2.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m8.75,3.5h-1c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h1c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m15.25,11c-.4141,0-.75-.3359-.75-.75v-1c0-.4141.3359-.75.75-.75s.75.3359.75.75v1c0,.4141-.3359.75-.75.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m15.25,2h-3.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1.6895l-1.9697,1.9697c-.293.293-.293.7676,0,1.0605.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l1.9697-1.9697v1.6895c0,.4141.3359.75.75.75s.75-.3359.75-.75v-3.5c0-.4141-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m3,10.5c-.342,0-.6753.0354-1,.0952v3.1548c0,1.2407,1.0093,2.25,2.25,2.25h4.25c0-3.0376-2.4625-5.5-5.5-5.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <rect
          height="9.5"
          width="9.5"
          fill={secondaryfill}
          opacity=".4"
          rx="2.25"
          ry="2.25"
          strokeWidth="0"
          x="2"
          y="6.5"
        />
        <circle cx="8.25" cy="9.75" fill={fill} r="1.25" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default ImageUpscale;
