import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Receipt4({
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
          d="m14.75,17c-.1309,0-.2607-.0342-.3779-.1021l-2.6055-1.5195-2.3643,1.5044c-.2441.1562-.5605.1562-.8047,0l-2.3643-1.5044-2.6055,1.5195c-.2314.1353-.5166.1367-.752.0024-.2324-.1338-.376-.3818-.376-.6504V3.75c0-1.5166,1.2334-2.75,2.75-2.75h3.9219c.7344,0,1.4248.2861,1.9443.8057l3.5781,3.5781c.5195.5195.8057,1.21.8057,1.9448v8.9214c0,.2686-.1436.5166-.376.6504-.1162.0664-.2451.0996-.374.0996Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m14.6943,5.3838l-3.5781-3.5781c-.3167-.3167-.7012-.5344-1.1162-.6658v4.3601c0,.5523.4477,1,1,1h4.36c-.1313-.415-.349-.7996-.6657-1.1162Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8,8.5h-1.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h1.75c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.75,11.5h-5.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h5.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Receipt4;
