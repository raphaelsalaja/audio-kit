import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectLayoutGrid5({
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
          d="M7,8.25h10v-3.5c0-1.517-1.233-2.75-2.75-2.75H7v6.25Z"
          fill={fill}
        />
        <path
          d="M12.5,9.75v6.25h1.75c1.517,0,2.75-1.233,2.75-2.75v-3.5h-4.5Z"
          fill={secondaryfill}
        />
        <path
          d="M5.5,2h-1.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75h1.75V2Z"
          fill={secondaryfill}
        />
        <rect height="6.25" width="4" fill={fill} x="7" y="9.75" />
      </g>
    </svg>
  );
}

export default RectLayoutGrid5;
