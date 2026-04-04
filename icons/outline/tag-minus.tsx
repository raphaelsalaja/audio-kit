import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TagMinus({
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
        <circle
          cx="6.25"
          cy="6.25"
          fill={secondaryfill}
          r="1.25"
          strokeWidth="0"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.75"
          x2="11.75"
          y1="5.75"
          y2="5.75"
        />
        <path
          d="m10.0396,3.2896l-.4546-.4546c-.375-.375-.884-.5859-1.414-.5859H3.25c-.552,0-1,.448-1,1v4.9219c0,.53.211,1.0391.586,1.4141l5.75,5.75c.781.781,2.047.781,2.828,0l3.922-3.9219c.7297-.7297.7686-1.8777.1348-2.6631"
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

export default TagMinus;
