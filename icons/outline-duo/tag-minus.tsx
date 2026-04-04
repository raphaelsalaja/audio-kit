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
        <path
          d="m8.172,2.25H3.25c-.552,0-1,.448-1,1v4.922c0,.53.211,1.039.586,1.414l5.75,5.75c.781.781,2.047.781,2.828,0l3.922-3.922c.781-.781.781-2.047,0-2.828l.1777-.586h-3.7637c-1.2426,0-2.25-1.0074-2.25-2.25,0-.7566.3734-1.4259.946-1.8338l-.86-1.0802c-.375-.375-.884-.586-1.414-.586Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m10.0396,3.2896l-.4546-.4546c-.375-.375-.884-.5859-1.414-.5859H3.25c-.552,0-1,.448-1,1v4.9219c0,.53.211,1.0391.586,1.4141l5.75,5.75c.781.781,2.047.781,2.828,0l3.922-3.9219c.7297-.7297.7686-1.8777.1348-2.6631"
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
          x1="16.75"
          x2="11.75"
          y1="5.75"
          y2="5.75"
        />
      </g>
    </svg>
  );
}

export default TagMinus;
