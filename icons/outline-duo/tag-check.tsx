import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TagCheck({
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
          d="m13,10.5c-3.0327,0-5.5-2.4673-5.5-5.5,0-.8481.1946-1.6509.5393-2.3686.0492-.1025-.1879-.3814-.3673-.3814H2.75c-.552,0-1,.448-1,1v4.9219c0,.53.211,1.0391.586,1.4141l5.75,5.75c.781.781,2.047.781,2.828,0l3.922-3.9219c.4075-.4075.5982-.5627.5805-1.0964,0,0-.2752-.256-.4165-.2002-.6202.245-1.2937.3825-2.0001.3825Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m7.3884,2.25H2.75c-.552,0-1,.448-1,1v4.9219c0,.53.211,1.0391.586,1.4141l5.75,5.75c.781.781,2.047.781,2.828,0l3.922-3.9219c.1712-.1712.3004-.3667.3939-.575"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13,1c-2.2061,0-4,1.7944-4,4s1.7939,4,4,4,4-1.7944,4-4-1.7939-4-4-4Zm2.3076,3.252l-2.25,2.5c-.1377.1528-.332.2422-.5381.2476-.0068.0005-.0127.0005-.0195.0005-.1982,0-.3896-.0786-.5303-.2197l-1.25-1.25c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l.6914.6909,1.7207-1.9126c.2783-.3066.751-.332,1.0596-.0557.3076.2773.333.7515.0557,1.0596Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="5.75" cy="6.25" fill={fill} r="1.25" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default TagCheck;
