import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ram({
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
          d="m15.25,12.5H2.75c-.9648,0-1.75-.7852-1.75-1.75v-5c0-1.5166,1.2334-2.75,2.75-2.75h10.5c1.5166,0,2.75,1.2334,2.75,2.75v5c0,.9648-.7852,1.75-1.75,1.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m6.5,12.5h-3.75c-.2694,0-.5218-.0664-.75-.1755v1.4255c0,.9648.7852,1.75,1.75,1.75h2.75v-3Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.25,12.5h-7.25v3h6.25c.9648,0,1.75-.7852,1.75-1.75v-1.4255c-.2282.1091-.4806.1755-.75.1755Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7.5835,9.5c-.4141,0-.75-.3359-.75-.75v-2c0-.4141.3359-.75.75-.75s.75.3359.75.75v2c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m4.75,9.5c-.4141,0-.75-.3359-.75-.75v-2c0-.4141.3359-.75.75-.75s.75.3359.75.75v2c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.4165,9.5c-.4141,0-.75-.3359-.75-.75v-2c0-.4141.3359-.75.75-.75s.75.3359.75.75v2c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.25,9.5c-.4141,0-.75-.3359-.75-.75v-2c0-.4141.3359-.75.75-.75s.75.3359.75.75v2c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Ram;
