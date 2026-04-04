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
          d="m11.8952,2.6143c.1082-.0184.2166.0364.266.1351l-.266-.1351Zm0,0l-6.5618,1.12s0,0,0,0c-1.3478.2305-2.3334,1.3984-2.3334,2.7657,0,.4142-.3358.75-.75.75s-.75-.3358-.75-.75c0-2.0986,1.5125-3.8907,3.5806-4.2443l6.5622-1.12c.7597-.1295,1.5154.2536,1.86.9429.1853.3705.0351.821-.3354,1.0062-.3705.1852-.821.0351-1.0062-.3354"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m16.5,11.5h-2.5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h2.5c.552,0,1,.448,1,1v1c0,.552-.448,1-1,1Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m14,7h2.5v-.25c0-1.5171-1.233-2.75-2.75-2.75H4.25c-1.517,0-2.75,1.2329-2.75,2.75v1.8591c.7511-.3853,1.5994-.6072,2.5-.6072,3.0327,0,5.5,2.4673,5.5,5.5,0,.8999-.2214,1.7476-.6062,2.498h4.8562c1.517,0,2.75-1.2329,2.75-2.75v-.25h-2.5c-1.6564,0-3-1.3438-3-3s1.3436-3,3-3Z"
          fill={fill}
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

export default Wallet2Check;
