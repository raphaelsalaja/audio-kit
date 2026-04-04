import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TagSlash({
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
          d="m12.375,5.625l-2.789-2.789c-.375-.375-.884-.586-1.414-.586H3.25c-.552,0-1,.448-1,1v4.922c0,.53.211,1.039.586,1.414l2.789,2.789,6.75-6.75Zm-5.1413,8.3587l1.3523,1.3523c.781.781,2.047.781,2.828,0l3.922-3.922c.781-.781.781-2.047,0-2.828l-1.3523-1.3523-6.75,6.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m5.625,12.375l-2.789-2.789c-.375-.375-.586-.884-.586-1.414V3.25c0-.552.448-1,1-1h4.922c.53,0,1.039.211,1.414.586l2.789,2.789"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.7476,14.4946l.8394.8394c.781.781,2.047.781,2.828,0l1.976-1.9761,1.976-1.9761c.781-.7808.781-2.0469,0-2.8279l-.8394-.8394"
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
          x1="2"
          x2="16"
          y1="16"
          y2="2"
        />
      </g>
    </svg>
  );
}

export default TagSlash;
