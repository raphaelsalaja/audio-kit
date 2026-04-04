import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSad({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm2,6c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm-4,0c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm5.53,5.523c-.146,.147-.338,.22-.53,.22-.191,0-.384-.073-.53-.219-1.322-1.32-3.617-1.32-4.939,0-.294,.292-.768,.292-1.061,0-.293-.293-.293-.768,0-1.061,.944-.943,2.198-1.462,3.53-1.462s2.586,.52,3.53,1.462c.293,.293,.293,.768,0,1.061Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceSad;
