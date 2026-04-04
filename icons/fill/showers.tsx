import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Showers({
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
          d="M8.75,9.5c-.192,0-.384-.073-.53-.22L2.22,3.28c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l6,6c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M15.25,10.5c-.192,0-.384-.073-.53-.22l-6-6c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l6,6c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={fill}
        />
        <path
          d="M9.75,16c-.192,0-.384-.073-.53-.22L3.22,9.78c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l6,6c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Showers;
