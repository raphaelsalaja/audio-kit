import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarLeft2({
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
          d="m3.75,2.75h10.5c1.1046,0,2,.8954,2,2v8.5c0,1.1046-.8954,2-2,2H3.75c-1.1046,0-2-.8954-2-2V4.75c0-1.1046.8954-2,2-2Zm1,3h3v6.5h-3v-6.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m14.25,2.75H3.75c-1.1046,0-2,.8954-2,2v8.5c0,1.1046.8954,2,2,2h10.5c1.1046,0,2-.8954,2-2V4.75c0-1.1046-.8954-2-2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.75,5.75h-3v6.5h3v-6.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SidebarLeft2;
