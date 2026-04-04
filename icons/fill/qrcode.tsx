import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Qrcode({
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
          d="M6.75,8.5H3.75c-.965,0-1.75-.785-1.75-1.75V3.75c0-.965,.785-1.75,1.75-1.75h3c.965,0,1.75,.785,1.75,1.75v3c0,.965-.785,1.75-1.75,1.75ZM3.75,3.5c-.138,0-.25,.112-.25,.25v3c0,.138,.112,.25,.25,.25h3c.138,0,.25-.112,.25-.25V3.75c0-.138-.112-.25-.25-.25H3.75Z"
          fill={fill}
        />
        <path
          d="M14.25,8.5h-3c-.965,0-1.75-.785-1.75-1.75V3.75c0-.965,.785-1.75,1.75-1.75h3c.965,0,1.75,.785,1.75,1.75v3c0,.965-.785,1.75-1.75,1.75Zm-3-5c-.138,0-.25,.112-.25,.25v3c0,.138,.112,.25,.25,.25h3c.138,0,.25-.112,.25-.25V3.75c0-.138-.112-.25-.25-.25h-3Z"
          fill={fill}
        />
        <path
          d="M6.75,16H3.75c-.965,0-1.75-.785-1.75-1.75v-3c0-.965,.785-1.75,1.75-1.75h3c.965,0,1.75,.785,1.75,1.75v3c0,.965-.785,1.75-1.75,1.75Zm-3-5c-.138,0-.25,.112-.25,.25v3c0,.138,.112,.25,.25,.25h3c.138,0,.25-.112,.25-.25v-3c0-.138-.112-.25-.25-.25H3.75Z"
          fill={fill}
        />
        <rect height="1.5" width="1.5" fill={fill} x="4.5" y="4.5" />
        <rect height="1.5" width="1.5" fill={fill} x="12" y="4.5" />
        <rect height="1.5" width="1.5" fill={fill} x="4.5" y="12" />
        <rect height="1.5" width="1.5" fill={secondaryfill} x="14.5" y="14.5" />
        <rect height="1.5" width="1.5" fill={secondaryfill} x="13" y="13" />
        <rect height="1.5" width="1.5" fill={secondaryfill} x="14.5" y="11.5" />
        <rect height="1.5" width="2" fill={secondaryfill} x="11" y="14.5" />
        <rect height="3" width="1.5" fill={secondaryfill} x="9.5" y="11.5" />
        <rect height="1.5" width="3.5" fill={secondaryfill} x="11" y="10" />
      </g>
    </svg>
  );
}

export default Qrcode;
