import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareBolt({
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
          d="m13.25,16H4.75c-1.5166,0-2.75-1.2334-2.75-2.75V4.75c0-1.5166,1.2334-2.75,2.75-2.75h8.5c1.5166,0,2.75,1.2334,2.75,2.75v8.5c0,1.5166-1.2334,2.75-2.75,2.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m12.1289,8.4258c-.1245-.2603-.3877-.4258-.6763-.4258h-1.9404l.7686-2.5322c.1055-.3477-.0537-.7217-.3779-.8862-.3252-.166-.7202-.0737-.939.2168l-3.0151,4c-.1714.2271-.1997.5317-.0728.7861.127.2549.3872.4155.6714.4155h1.9185l-.7417,2.2671c-.1128.3442.0371.7197.3555.8921.1128.0615.2354.0908.3569.0908.2212,0,.4385-.0977.585-.2798l3.0156-3.75c.1807-.2251.2168-.5337.0918-.7944Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SquareBolt;
