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
        <path
          d="m14.25,2.5H3.75c-1.5166,0-2.75,1.2334-2.75,2.75v7.5c0,1.5166,1.2334,2.75,2.75,2.75h10.5c1.5166,0,2.75-1.2334,2.75-2.75v-7.5c0-1.5166-1.2334-2.75-2.75-2.75ZM5.75,11h1c.1377,0,.25-.1123.25-.25,0-.4141.3359-.75.75-.75s.75.3359.75.75c0,.9648-.7852,1.75-1.75,1.75h-1c-.9648,0-1.75-.7852-1.75-1.75v-3.5c0-.9648.7852-1.75,1.75-1.75h1c.9648,0,1.75.7852,1.75,1.75,0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75c0-.1377-.1123-.25-.25-.25h-1c-.1377,0-.25.1123-.25.25v3.5c0,.1377.1123.25.25.25Zm5.5,0h1c.1377,0,.25-.1123.25-.25,0-.4141.3359-.75.75-.75s.75.3359.75.75c0,.9648-.7852,1.75-1.75,1.75h-1c-.9648,0-1.75-.7852-1.75-1.75v-3.5c0-.9648.7852-1.75,1.75-1.75h1c.9648,0,1.75.7852,1.75,1.75,0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75c0-.1377-.1123-.25-.25-.25h-1c-.1377,0-.25.1123-.25.25v3.5c0,.1377.1123.25.25.25Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ClosedCaptions;
