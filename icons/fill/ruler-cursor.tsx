import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RulerCursor({
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
          d="m16.3237,11.2334l-5.9399-2.1704h-.0005c-.3789-.1392-.7935-.0469-1.0811.2393-.2861.2861-.3779.7007-.2393,1.0815l2.1704,5.9399c.1484.4067.5356.6763.9673.6763h.0205c.4399-.0088.8257-.2959.9604-.7158l.752-2.3506,2.3516-.7524c.4189-.1343.7061-.52.7148-.96.0083-.4399-.2632-.8369-.6763-.9878Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75v8.5c0,1.517,1.233,2.75,2.75,2.75h2c.414,0,.75-.336.75-.75v-7.75h7.75c.414,0,.75-.336.75-.75v-2c0-1.517-1.233-2.75-2.75-2.75ZM4.75,14.5c-.689,0-1.25-.561-1.25-1.25v-5.75h2.5v1.5h-.75c-.414,0-.75.336-.75.75s.336.75.75.75h.75v1.5h-.75c-.414,0-.75.336-.75.75s.336.75.75.75h.75v1h-1.25ZM14.5,6h-1v-.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75v.75h-1.5v-.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75v.75h-1.5v-2.5h5.75c.689,0,1.25.561,1.25,1.25v1.25Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default RulerCursor;
