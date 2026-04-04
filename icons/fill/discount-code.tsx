import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiscountCode({
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
          d="M16.25,8c.414,0,.75-.336,.75-.75v-1.5c0-1.517-1.233-2.75-2.75-2.75H3.75c-1.517,0-2.75,1.233-2.75,2.75v1.5c0,.414,.336,.75,.75,.75,.551,0,1,.449,1,1s-.449,1-1,1c-.414,0-.75,.336-.75,.75v1.5c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75v-1.5c0-.414-.336-.75-.75-.75-.551,0-1-.449-1-1s.449-1,1-1ZM7,6c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm4,6c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm.78-4.72l-4.5,4.5c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22c-.293-.293-.293-.768,0-1.061l4.5-4.5c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DiscountCode;
