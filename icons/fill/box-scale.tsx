import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxScale({
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
          d="M7.75,6h-1.25v2.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-2.25h-1.25c-.965,0-1.75,.785-1.75,1.75v4c0,.965,.785,1.75,1.75,1.75H7.75c.965,0,1.75-.785,1.75-1.75V7.75c0-.965-.785-1.75-1.75-1.75Z"
          fill={secondaryfill}
        />
        <path
          d="M16.25,14.5h-1.75V7.915c1.57-.345,2.75-1.743,2.75-3.415,0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5c0,1.672,1.18,3.07,2.75,3.415v6.585H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h14.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Zm-2.5-9.25c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l.942-.942c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-.942,.942c-.146,.146-.338,.22-.53,.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BoxScale;
