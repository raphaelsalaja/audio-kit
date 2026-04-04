import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowsMerge({
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
          d="M13.25,9.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.75v-3.5c0-1.517-1.233-2.75-2.75-2.75H4.75c-1.517,0-2.75,1.233-2.75,2.75v3.5h2.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75H2v3.5c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75v-3.5h-2.75Zm-2.53,.47c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-2.25,2.25c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22l-2.25-2.25c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l.97,.97V6.811l-.97,.97c-.293,.293-.768,.293-1.061,0s-.293-.768,0-1.061l2.25-2.25c.293-.293,.768-.293,1.061,0l2.25,2.25c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22l-.97-.97v4.379l.97-.97Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableRowsMerge;
