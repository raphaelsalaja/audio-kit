import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Discount({
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
          d="M16.249,7.763s0,0,0,0l-1.248-1.248v-1.765c0-.965-.785-1.75-1.75-1.75h-1.765l-1.248-1.248c-.683-.683-1.792-.683-2.475,0l-1.248,1.248h-1.765c-.965,0-1.75,.785-1.75,1.75v1.765l-1.249,1.248c-.682,.682-.682,1.792,0,2.474l1.248,1.248v1.765c0,.965,.785,1.75,1.75,1.75h1.765l1.249,1.249c.341,.34,.789,.511,1.237,.511s.896-.17,1.237-.511l1.248-1.248h1.765c.965,0,1.75-.785,1.75-1.75v-1.765l1.248-1.248c.682-.682,.682-1.792,0-2.474Zm-9.249-1.763c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm4,6c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm.78-4.72l-4.5,4.5c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22c-.293-.293-.293-.768,0-1.061l4.5-4.5c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Discount;
