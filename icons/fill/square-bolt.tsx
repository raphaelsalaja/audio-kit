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
          d="m13.25,2H4.75c-1.5166,0-2.75,1.2334-2.75,2.75v8.5c0,1.5166,1.2334,2.75,2.75,2.75h8.5c1.5166,0,2.75-1.2334,2.75-2.75V4.75c0-1.5166-1.2334-2.75-2.75-2.75Zm-1.2129,7.2202l-3.0156,3.75c-.1465.1821-.3638.2798-.585.2798-.1216,0-.2441-.0293-.3569-.0908-.3184-.1724-.4683-.5479-.3555-.8921l.7417-2.2671h-1.9185c-.2842,0-.5444-.1606-.6714-.4155-.127-.2544-.0986-.5591.0728-.7861l3.0151-4c.2188-.2905.6138-.3828.939-.2168.3242.1646.4834.5386.3779.8862l-.7686,2.5322h1.9404c.2886,0,.5518.1655.6763.4258.125.2607.0889.5693-.0918.7944Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SquareBolt;
