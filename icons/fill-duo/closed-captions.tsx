import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClosedCaptions({
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
        <rect
          height="13"
          width="16"
          fill={secondaryfill}
          opacity=".4"
          rx="2.75"
          ry="2.75"
          strokeWidth="0"
          x="1"
          y="2.5"
        />
        <path
          d="m6.75,12.5h-1c-.9648,0-1.75-.7852-1.75-1.75v-3.5c0-.9648.7852-1.75,1.75-1.75h1c.9648,0,1.75.7852,1.75,1.75,0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75c0-.1377-.1123-.25-.25-.25h-1c-.1377,0-.25.1123-.25.25v3.5c0,.1377.1123.25.25.25h1c.1377,0,.25-.1123.25-.25,0-.4141.3359-.75.75-.75s.75.3359.75.75c0,.9648-.7852,1.75-1.75,1.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.25,12.5h-1c-.9648,0-1.75-.7852-1.75-1.75v-3.5c0-.9648.7852-1.75,1.75-1.75h1c.9648,0,1.75.7852,1.75,1.75,0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75c0-.1377-.1123-.25-.25-.25h-1c-.1377,0-.25.1123-.25.25v3.5c0,.1377.1123.25.25.25h1c.1377,0,.25-.1123.25-.25,0-.4141.3359-.75.75-.75s.75.3359.75.75c0,.9648-.7852,1.75-1.75,1.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ClosedCaptions;
