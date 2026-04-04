import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flag7({
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
          d="M14.25,5h-1.25v-.75c0-.965-.785-1.75-1.75-1.75H4v7.5h7.146c.223,0,.334,.27,.177,.427l-1.673,1.673c.302,.246,.681,.4,1.1,.4h3.5c.965,0,1.75-.785,1.75-1.75V6.75c0-.965-.785-1.75-1.75-1.75Z"
          fill={fill}
        />
        <path
          d="M3.75,17c-.414,0-.75-.336-.75-.75V1.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v14.5c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Flag7;
