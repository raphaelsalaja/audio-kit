import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PicnicTable({
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
          d="m2.7505,15c-.0684,0-.1377-.0093-.2065-.0288-.3984-.1138-.6289-.5288-.5151-.9272L5.0288,3.5439c.1138-.3984.5308-.6289.9272-.5151.3984.1138.6289.5288.5151.9272l-3,10.5c-.0942.3296-.3945.5439-.7207.5439Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.2495,15c-.3262,0-.6265-.2144-.7207-.5439l-3-10.5c-.1138-.3984.1167-.8135.5151-.9272.396-.1147.8135.1157.9272.5151l3,10.5c.1138.3984-.1167.8135-.5151.9272-.0688.0195-.1382.0288-.2065.0288Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m16.25,10H1.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h14.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.75,4.5H3.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h11.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default PicnicTable;
