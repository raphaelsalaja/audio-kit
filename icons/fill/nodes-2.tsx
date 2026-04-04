import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nodes2({
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
        <rect
          height="12"
          width="1.5"
          fill={secondaryfill}
          strokeWidth="0"
          x="8.25"
          y="3"
        />
        <polygon
          fill={secondaryfill}
          points="14.8848 6.394 14.1152 5.106 9 8.1616 3.8848 5.106 3.1152 6.394 7.5253 9.0286 3.1211 11.6025 3.8789 12.8975 9 9.9045 14.1211 12.8975 14.8789 11.6025 10.4747 9.0286 14.8848 6.394"
          strokeWidth="0"
        />
        <path
          d="m8.9893,16.2437c-.1318,0-.2637-.0347-.3818-.1045l-5.4893-3.2437c-.2285-.1348-.3682-.3804-.3682-.6455v-6.5c0-.2651.1396-.5107.3682-.6455l5.5-3.25c.2363-.1396.5273-.1396.7637,0l5.5,3.25c.2285.1348.3682.3804.3682.6455v6.5049c0,.2661-.1406.5117-.3701.6465l-5.5107,3.2388c-.1172.0688-.249.1035-.3799.1035Zm-4.7393-4.4214l4.7402,2.8008,4.7598-2.7974v-5.6479l-4.75-2.8066-4.75,2.8066v5.6445Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <circle cx="9" cy="9" fill={fill} r="2" strokeWidth="0" />
        <circle cx="3.5" cy="5.75" fill={fill} r="2" strokeWidth="0" />
        <circle cx="3.5" cy="12.25" fill={fill} r="2" strokeWidth="0" />
        <circle cx="14.5" cy="5.75" fill={fill} r="2" strokeWidth="0" />
        <circle cx="14.5" cy="12.25" fill={fill} r="2" strokeWidth="0" />
        <circle cx="9" cy="2.5" fill={fill} r="2" strokeWidth="0" />
        <circle cx="9" cy="15.5" fill={fill} r="2" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Nodes2;
