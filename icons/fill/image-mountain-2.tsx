import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageMountain2({
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
        <circle cx="5" cy="4.5" fill={secondaryfill} r="2.25" />
        <path
          d="M16.168,13.723l-2.152-6.815c-.173-.549-.604-.977-1.155-1.146-.549-.167-1.147-.056-1.6,.301L2.651,12.878c-.592,.469-.814,1.233-.566,1.947,.248,.714,.897,1.175,1.653,1.175H14.499c.563,0,1.078-.261,1.411-.715,.334-.455,.428-1.024,.258-1.562Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ImageMountain2;
