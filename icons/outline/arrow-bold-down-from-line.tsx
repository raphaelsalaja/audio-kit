import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldDownFromLine({
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
          d="M4.146,10.561l4.463,5.605c.2,.251,.582,.251,.782,0l4.463-5.605c.261-.328,.028-.811-.391-.811h-2.213V5.75c0-.552-.448-1-1-1h-2.5c-.552,0-1,.448-1,1v4h-2.213c-.419,0-.652,.484-.391,.811Z"
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
          x1="6.75"
          x2="11.25"
          y1="1.75"
          y2="1.75"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldDownFromLine;
