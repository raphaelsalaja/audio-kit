import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wallet2Check({
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
          d="m13.5028,2.0786c-.3446-.6893-1.1001-1.0725-1.8599-.9429l-6.5623,1.1201c-2.0681.3536-3.5806,2.1457-3.5806,4.2443,0,.0286.0016.0571.0049.0852.0852-1.4424,1.2813-2.5852,2.7451-2.5852h9.5c.1733,0,.3429.016.5074.0467-.0217-.0639-.0433-.128-.0649-.1922-.2043-.6057-.411-1.2186-.6897-1.7759Z"
          fill={secondaryfill}
          opacity=".2"
          strokeWidth="0"
        />
        <path
          d="m13.75,4H4.25c-1.5192,0-2.75,1.2307-2.75,2.75v1.8591c.7511-.3853,1.5994-.6072,2.5-.6072,3.0327,0,5.5,2.4673,5.5,5.5,0,.8999-.2214,1.7476-.6062,2.498h4.8562c1.5192,0,2.75-1.231,2.75-2.75v-6.5c0-1.5193-1.2308-2.75-2.75-2.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m4,9.502c-2.2061,0-4,1.7944-4,4s1.7939,4,4,4,4-1.7944,4-4-1.7939-4-4-4Zm2.3076,3.252l-2.25,2.5c-.1377.1528-.332.2422-.5381.2476-.0068.0005-.0127.0005-.0195.0005-.1982,0-.3896-.0786-.5303-.2197l-1.25-1.25c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l.6914.6909,1.7207-1.9126c.2783-.3066.751-.332,1.0596-.0557.3076.2773.333.7515.0557,1.0596Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16,11.75h-3c-.966,0-1.75-.784-1.75-1.75,0-.967.784-1.75,1.75-1.75h3c.552,0,1,.448,1,1v1.5c0,.552-.448,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Wallet2Check;
