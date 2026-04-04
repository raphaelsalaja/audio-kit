import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarLeft5Hide({
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
          d="M13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75ZM6.5,12.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V5.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v6.5Zm5.53-1.53c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22l-2.25-2.25c-.293-.293-.293-.768,0-1.061l2.25-2.25c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-1.72,1.72,1.72,1.72Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarLeft5Hide;
