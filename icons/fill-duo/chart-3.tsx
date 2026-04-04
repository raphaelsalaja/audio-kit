import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chart3({
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
          d="m6.75,9h-3.5c-.9648,0-1.75.7852-1.75,1.75v3c0,.9648.7852,1.75,1.75,1.75h3.5c.4141,0,.75-.3359.75-.75v-5c0-.4141-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m14.75,5.5h-3.5c-.4141,0-.75.3359-.75.75v8.5c0,.4141.3359.75.75.75h3.5c.9648,0,1.75-.7852,1.75-1.75v-6.5c0-.9648-.7852-1.75-1.75-1.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m10.25,2h-2.5c-.9648,0-1.75.7852-1.75,1.75v11c0,.4141.3359.75.75.75h4.5c.4141,0,.75-.3359.75-.75V3.75c0-.9648-.7852-1.75-1.75-1.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Chart3;
