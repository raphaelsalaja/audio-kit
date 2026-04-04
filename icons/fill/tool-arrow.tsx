import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ToolArrow({
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
          d="M2.75,16c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L11.192,5.748c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061L3.28,15.78c-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M15.78,2.22c-.201-.201-.497-.271-.768-.181l-5.292,1.764c-.246,.082-.433,.286-.492,.539-.061,.253,.016,.519,.199,.703l3.528,3.528c.143,.143,.334,.22,.53,.22,.058,0,.115-.006,.172-.02,.254-.06,.457-.246,.54-.493l1.764-5.292c.09-.27,.02-.567-.182-.768Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ToolArrow;
