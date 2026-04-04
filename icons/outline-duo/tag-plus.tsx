import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TagPlus({
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
          d="m10.5786,3.8286c-.6469.3952-1.0786,1.1079-1.0786,1.9214,0,1.2426,1.0074,2.25,2.25,2.25h.25v.25c0,1.2426,1.0074,2.25,2.25,2.25.4103,0,.795-.1098,1.1262-.3017,0,0,.4088.7667-.0402,1.2157l-3.922,3.922c-.781.781-2.047.781-2.828,0l-5.75-5.75c-.375-.375-.586-.884-.586-1.414V3.25c0-.552.448-1,1-1h4.922c.53,0,1.039.211,1.414.586l.9926.9926Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m10.051,3.301l-.4659-.4661c-.375-.375-.884-.5859-1.414-.5859H3.25c-.552,0-1,.448-1,1v4.9219c0,.53.211,1.0391.586,1.4141l5.75,5.75c.781.781,2.047.781,2.828,0l3.922-3.9219c.1662-.1663.291-.3562.3848-.5569"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="6.25" cy="6.25" fill={fill} r="1.25" strokeWidth="0" />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="14.25"
          x2="14.25"
          y1="3.25"
          y2="8.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.75"
          x2="11.75"
          y1="5.75"
          y2="5.75"
        />
      </g>
    </svg>
  );
}

export default TagPlus;
