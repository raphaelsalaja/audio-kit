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
          d="m14.75,6c-3.6617,0-7.3253-.0024-10.9844-.0024-.4142,0-.75-.3359-.75-.75,0-.4143.3358-.75.75-.75h10.734c.0006-.1858.0005-.3713.0005-.5569v-.1907c-.0001-.9663-.7839-1.75-1.7501-1.75H4.25c-1.5192,0-2.75,1.2307-2.75,2.75v3.8591c.7511-.3853,1.5994-.6072,2.5-.6072,3.0327,0,5.5,2.4673,5.5,5.5,0,.8999-.2214,1.7476-.6062,2.498h5.8562c.9662,0,1.75-.7837,1.75-1.75v-6.5c0-.9663-.7838-1.75-1.75-1.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m12.75,12.25c.6904,0,1.25-.56,1.25-1.25s-.5596-1.25-1.25-1.25-1.25.56-1.25,1.25.5596,1.25,1.25,1.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m4,9.502c-2.2061,0-4,1.7944-4,4s1.7939,4,4,4,4-1.7944,4-4-1.7939-4-4-4Zm2.3076,3.252l-2.25,2.5c-.1377.1528-.332.2422-.5381.2476-.0068.0005-.0127.0005-.0195.0005-.1982,0-.3896-.0786-.5303-.2197l-1.25-1.25c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l.6914.6909,1.7207-1.9126c.2783-.3066.751-.332,1.0596-.0557.3076.2773.333.7515.0557,1.0596Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default WalletCheck;
