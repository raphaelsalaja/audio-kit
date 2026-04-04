import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldLeftFromLine({
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
          d="M7.439,4.146L1.833,8.609c-.251,.2-.251,.582,0,.782l5.605,4.463c.328,.261,.811,.028,.811-.391v-2.213h4c.552,0,1-.448,1-1v-2.5c0-.552-.448-1-1-1h-4v-2.213c0-.419-.484-.652-.811-.391Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.25"
          x2="16.25"
          y1="6.75"
          y2="11.25"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldLeftFromLine;
