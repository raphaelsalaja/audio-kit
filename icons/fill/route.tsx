import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Route({
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
          d="M13.5,9h-2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.25c1.103,0,2-.897,2-2s-.897-2-2-2H6.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h7.25c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5Z"
          fill={fill}
        />
        <path
          d="M16.28,13.22l-2.475-2.475c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.195,1.195H4.5c-1.103,0-2-.897-2-2s.897-2,2-2h2.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-2.25c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5H13.939l-1.195,1.195c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.475-2.475c.293-.293,.293-.768,0-1.061Z"
          fill={fill}
        />
        <circle cx="3.25" cy="2.75" fill={secondaryfill} r=".75" />
        <circle cx="9" cy="8.25" fill={secondaryfill} r="3" />
      </g>
    </svg>
  );
}

export default Route;
