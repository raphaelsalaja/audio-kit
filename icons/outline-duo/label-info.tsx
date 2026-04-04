import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LabelInfo({
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
          d="m7.5,13c0-3.0327,2.4678-5.5,5.5-5.5.0844,0,.1665.0088.25.0127v-.1248c0-.5649-.239-1.104-.658-1.4829l-3.921-3.5471c-.381-.345-.961-.345-1.342,0l-3.921,3.5471c-.419.3789-.658.918-.658,1.4829v6.8621c0,1.105.895,2,2,2h3.4844s.111-.3272.0103-.5c-.4717-.8094-.7447-1.7475-.7447-2.75Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m13.2208,6.7612c-.0649-.4609-.2795-.8899-.6288-1.2058l-3.921-3.5471c-.381-.345-.961-.345-1.342,0l-3.921,3.5471c-.419.3789-.658.918-.658,1.4829v7.2117c0,1.105.895,2,2,2h2.9217"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13,9c-2.2061,0-4,1.7944-4,4s1.7939,4,4,4,4-1.7944,4-4-1.7939-4-4-4Zm.75,6c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-1.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v1.5Zm-.75-3c-.4832,0-.875-.3918-.875-.875s.3918-.875.875-.875.875.3917.875.875-.3918.875-.875.875Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="8" cy="6.75" fill={fill} r="1.25" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default LabelInfo;
