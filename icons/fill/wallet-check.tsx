import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WalletCheck({
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
          d="m2.25,5.5c-.414,0-.75-.336-.75-.75,0-1.517,1.233-2.75,2.75-2.75h8.5c.965,0,1.75.785,1.75,1.75v.5c0,.414-.336.75-.75.75s-.75-.336-.75-.75v-.5c0-.138-.112-.25-.25-.25H4.25c-.689,0-1.25.561-1.25,1.25,0,.414-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.75,6H4.25c-.689,0-1.25-.561-1.25-1.25,0-.4141-.336-.75-.75-.75s-.75.3359-.75.75v3.8591c.7511-.3853,1.5994-.6072,2.5-.6072,3.0327,0,5.5,2.4673,5.5,5.5,0,.8999-.2214,1.7476-.6062,2.498h5.8562c.965,0,1.75-.7852,1.75-1.75v-6.5c0-.9651-.785-1.75-1.75-1.75Zm-1.75,6c-.5523,0-1-.4478-1-1s.4477-1,1-1,1,.4478,1,1-.4477,1-1,1Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m4,9.502c-2.2061,0-4,1.7944-4,4s1.7939,4,4,4,4-1.7944,4-4-1.7939-4-4-4Zm2.3076,3.252l-2.25,2.5c-.1377.1528-.332.2422-.5381.2476-.0068.0005-.0127.0005-.0195.0005-.1982,0-.3896-.0786-.5303-.2197l-1.25-1.25c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l.6914.6909,1.7207-1.9126c.2783-.3066.751-.332,1.0596-.0557.3076.2773.333.7515.0557,1.0596Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default WalletCheck;
