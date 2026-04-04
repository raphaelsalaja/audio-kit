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
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m2,4.75c0-1.5192,1.2308-2.75,2.75-2.75h8.5c1.5192,0,2.75,1.2308,2.75,2.75v1.5c0,.4142-.3358.75-.75.75H7v8.25c0,.4142-.3358.75-.75.75h-1.5c-1.5192,0-2.75-1.2308-2.75-2.75V4.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m7,12v1.5h-1.75c-.4142,0-.75-.3358-.75-.75s.3358-.75.75-.75h1.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7,2h-2.25c-1.5192,0-2.75,1.2308-2.75,2.75v2.25h5V2Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.5,7h-1.5v-1.75c0-.4142.3358-.75.75-.75s.75.3358.75.75v1.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.5,7h-1.5v-1.75c0-.4142.3358-.75.75-.75s.75.3358.75.75v1.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7,9v1.5h-1.75c-.4142,0-.75-.3358-.75-.75s.3358-.75.75-.75h1.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default RulerCursor;
