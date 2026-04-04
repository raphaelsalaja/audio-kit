import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sunrise2({
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
          d="m16.25,11.5H1.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h14.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.25,14.5H3.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h10.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m1.75,10h1.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-1.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m4.2266,5.5376c.1465.146.3384.2192.5303.2192s.3843-.0732.5308-.2197c.2925-.2935.2925-.7681-.0005-1.061l-.8838-.8828c-.293-.292-.7681-.2925-1.061.0005-.2925.2935-.2925.7681.0005,1.061l.8838.8828Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m13.2432,5.7568c.1919,0,.3838-.0732.5303-.2197l.8828-.8828c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-.8828.8828c-.293.293-.293.7676,0,1.0605.1465.1465.3384.2197.5303.2197Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m14.25,9.25c0,.4141.3359.75.75.75h1.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-1.25c-.4141,0-.75.3359-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9,4c.4141,0,.75-.3359.75-.75v-1.25c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.25c0,.4141.3359.75.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m5.5,10h7c.4141,0,.75-.3359.75-.75,0-2.3433-1.9067-4.25-4.25-4.25s-4.25,1.9067-4.25,4.25c0,.4141.3359.75.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Sunrise2;
