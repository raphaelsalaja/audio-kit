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
          d="m15.25,11c-.4141,0-.75.3359-.75.75v2c0,.1377-.1123.25-.25.25h-6.25v-2.25c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v2.25h-2.75c-.1377,0-.25-.1123-.25-.25v-2c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v2c0,.9648.7852,1.75,1.75,1.75h10.5c.9648,0,1.75-.7852,1.75-1.75v-2c0-.4141-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m14.25,3H3.75c-1.5166,0-2.75,1.2334-2.75,2.75v5c0,.9648.7852,1.75,1.75,1.75h12.5c.9648,0,1.75-.7852,1.75-1.75v-5c0-1.5166-1.2334-2.75-2.75-2.75Zm-8.75,5.75c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-2c0-.4141.3359-.75.75-.75s.75.3359.75.75v2Zm2.8335,0c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-2c0-.4141.3359-.75.75-.75s.75.3359.75.75v2Zm2.833,0c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-2c0-.4141.3359-.75.75-.75s.75.3359.75.75v2Zm2.8335,0c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-2c0-.4141.3359-.75.75-.75s.75.3359.75.75v2Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Ram;
