import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareLayoutGrid6({
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
        <rect height="3.5" width="4" fill={secondaryfill} x="7" y="2" />
        <rect height="4" width="3.5" fill={secondaryfill} x="2" y="7" />
        <rect height="4" width="3.5" fill={secondaryfill} x="12.5" y="7" />
        <rect height="3.5" width="4" fill={secondaryfill} x="7" y="12.5" />
        <rect height="4" width="4" fill={fill} x="7" y="7" />
        <path
          d="M5.5,12.5H2v.75c0,1.517,1.233,2.75,2.75,2.75h.75v-3.5Z"
          fill={fill}
        />
        <path
          d="M12.5,5.5h3.5v-.75c0-1.517-1.233-2.75-2.75-2.75h-.75v3.5Z"
          fill={fill}
        />
        <path
          d="M12.5,12.5v3.5h.75c1.517,0,2.75-1.233,2.75-2.75v-.75h-3.5Z"
          fill={fill}
        />
        <path
          d="M5.5,5.5V2h-.75c-1.517,0-2.75,1.233-2.75,2.75v.75h3.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareLayoutGrid6;
