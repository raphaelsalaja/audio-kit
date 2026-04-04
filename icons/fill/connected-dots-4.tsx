import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ConnectedDots4({
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
          d="M4.664,8.336c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l2.922-2.922c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-2.922,2.922c-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M13.336,8.336c-.192,0-.384-.073-.53-.22l-2.922-2.922c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l2.922,2.922c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M10.414,14.086c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l2.922-2.922c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-2.922,2.922c-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M7.586,14.086c-.192,0-.384-.073-.53-.22l-2.922-2.922c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l2.922,2.922c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <circle cx="9" cy="3.25" fill={fill} r="2.75" />
        <circle cx="9" cy="14.75" fill={fill} r="2.75" />
        <circle cx="14.75" cy="9" fill={fill} r="2.75" />
        <circle cx="3.25" cy="9" fill={fill} r="2.75" />
      </g>
    </svg>
  );
}

export default ConnectedDots4;
