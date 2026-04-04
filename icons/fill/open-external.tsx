import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenExternal({
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
          d="m12.8828,14.5h-5.1328c-2.3433,0-4.25-1.9067-4.25-4.25v-5.1329c-1.1506.3289-2,1.3781-2,2.6329v6c0,1.5166,1.2334,2.75,2.75,2.75h6c1.2549,0,2.3042-.8494,2.6328-2Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m13.75,1.5h-6c-1.5188,0-2.75,1.2312-2.75,2.75v6c0,1.5188,1.2312,2.75,2.75,2.75h6c1.5188,0,2.75-1.2312,2.75-2.75v-6c0-1.5188-1.2312-2.75-2.75-2.75Zm-.25,6.75c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-1.1895l-2.4697,2.4697c-.1465.1465-.3379.2197-.5303.2197s-.3838-.0732-.5303-.2197c-.293-.293-.293-.7676,0-1.0605l2.4697-2.4697h-1.1895c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h3c.4141,0,.75.3359.75.75v3Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default OpenExternal;
