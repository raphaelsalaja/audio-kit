import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ButtonCursor({
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
          d="m13.5,16H4.5c-1.9297,0-3.5-1.5703-3.5-3.5v-3c0-.4141.3359-.75.75-.75s.75.3359.75.75v3c0,1.103.897,2,2,2h9c1.103,0,2-.897,2-2v-3c0-.4141.3359-.75.75-.75s.75.3359.75.75v3c0,1.9297-1.5703,3.5-3.5,3.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.6052,6.7222c-.2239.1909-.4794.3486-.7668.4536l-5.9399,2.1699c-.2808.103-.5742.1548-.8721.1548-.6724,0-1.3062-.2637-1.7847-.7422-.7036-.7031-.9287-1.7207-.5879-2.6553l.0377-.103h-1.1915c-1.9297,0-3.5,1.5703-3.5,3.5s1.5703,3.5,3.5,3.5h9c1.9297,0,3.5-1.5703,3.5-3.5,0-1.1362-.553-2.1379-1.3948-2.7778Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.2842,3.8184l-2.3506-.752-.7524-2.3516c-.1343-.4189-.52-.7061-.96-.7148-.4478.0024-.8374.2627-.9878.6763l-2.1704,5.9404c-.1387.3804-.0469.7949.2393,1.0811.1982.1982.457.3027.7241.3027.1191,0,.2397-.0205.3569-.0635h.0005l5.9399-2.1704c.4131-.1509.6846-.5479.6763-.9878-.0088-.4399-.2959-.8257-.7158-.9604Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ButtonCursor;
