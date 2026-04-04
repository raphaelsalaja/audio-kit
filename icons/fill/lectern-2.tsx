import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Lectern2({
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
          d="m16.3804,7.0874l-1.4316-3.5c-.2705-.6606-.9062-1.0874-1.6201-1.0874H4.6714c-.7139,0-1.3496.4268-1.6201,1.0874l-1.4316,3.5c-.2212.541-.1587,1.1528.167,1.6382.3257.4849.8687.7744,1.4531.7744h11.5205c.5845,0,1.1274-.2896,1.4531-.7744.3257-.4854.3882-1.0972.167-1.6382Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.75,14.5h-3v-2.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v2.75h-3c-.4141,0-.75.3359-.75.75s.3359.75.75.75h7.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Lectern2;
