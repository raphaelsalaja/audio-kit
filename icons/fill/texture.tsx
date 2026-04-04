import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Texture({
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
          d="M2.75,16c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L14.72,2.22c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061L3.28,15.78c-.146,.146-.338,.22-.53,.22Z"
          fill={fill}
        />
        <path
          d="M2.75,11c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L9.72,2.22c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061L3.28,10.78c-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M2.75,6c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l2.5-2.5c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-2.5,2.5c-.146,.146-.338,.22-.53,.22Z"
          fill={fill}
        />
        <path
          d="M7.75,16c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l7.5-7.5c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-7.5,7.5c-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M12.75,16c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061l2.5-2.5c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-2.5,2.5c-.146,.146-.338,.22-.53,.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Texture;
