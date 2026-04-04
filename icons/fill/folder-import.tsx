import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderImport({
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
          d="m13.75,4.5h-4.279l-1.3-1.53c-.523-.616-1.288-.97-2.096-.97h-1.825c-1.517,0-2.75,1.2329-2.75,2.75v4.25h5.4395l-.9697-.9697c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l2.25,2.25c.293.293.293.7676,0,1.0605l-2.25,2.25c-.1465.1465-.3379.2197-.5303.2197s-.3838-.0732-.5303-.2197c-.293-.293-.293-.7676,0-1.0605l.9697-.9697H1.5v2.25c0,1.5171,1.233,2.75,2.75,2.75h9.5c1.517,0,2.75-1.2329,2.75-2.75v-5.5c0-1.5171-1.233-2.75-2.75-2.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default FolderImport;
