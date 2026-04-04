import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Download3({
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
          d="M13.75,6h-4v4.939l1.72-1.72c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3,3c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22l-3-3c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l1.72,1.72V6H4.25c-1.517,0-2.75,1.233-2.75,2.75v5c0,1.517,1.233,2.75,2.75,2.75H13.75c1.517,0,2.75-1.233,2.75-2.75v-5c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
        />
        <path
          d="M9.75,6V1.25c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75V6h1.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Download3;
