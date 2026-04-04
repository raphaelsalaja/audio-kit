import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Rss({
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
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <circle cx="6.566" cy="25.434" r="3.566" />
        <path d="M20.234,29h-5.051c0-6.728-5.454-12.183-12.183-12.183h0v-5.051c9.518,0,17.234,7.716,17.234,17.234Z" />
        <path d="M23.8,29c0-11.488-9.312-20.8-20.8-20.8V3c14.359,0,26,11.641,26,26h-5.2Z" />
      </g>
    </svg>
  );
}

export default Rss;
