import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CropAlphaGrid({
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
        <path d="M7.5 6H6V7.5H7.5V6Z" fill={fill} />
        <path d="M10.5 6H9V7.5H10.5V6Z" fill={fill} />
        <path d="M12 7.5H10.5V9H12V7.5Z" fill={fill} />
        <path d="M9 7.5H7.5V9H9V7.5Z" fill={fill} />
        <path d="M7.5 9H6V10.5H7.5V9Z" fill={fill} />
        <path d="M10.5 9H9V10.5H10.5V9Z" fill={fill} />
        <path d="M12 10.5H10.5V12H12V10.5Z" fill={fill} />
        <path d="M9 10.5H7.5V12H9V10.5Z" fill={fill} />
        <path
          d="M4.5 1.75C4.5 1.33579 4.16421 1 3.75 1C3.33579 1 3 1.33579 3 1.75V3H1.75C1.33579 3 1 3.33579 1 3.75C1 4.16421 1.33579 4.5 1.75 4.5H3V12.25C3 13.7688 4.23119 15 5.75 15H13.5V16.25C13.5 16.6642 13.8358 17 14.25 17C14.6642 17 15 16.6642 15 16.25V15H16.25C16.6642 15 17 14.6642 17 14.25C17 13.8358 16.6642 13.5 16.25 13.5H15V5.75C15 4.23119 13.7688 3 12.25 3H6.75C6.33579 3 6 3.33579 6 3.75C6 4.16421 6.33579 4.5 6.75 4.5H12.25C12.9404 4.5 13.5 5.05961 13.5 5.75V13.5H5.75C5.05961 13.5 4.5 12.9404 4.5 12.25V3.75V1.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CropAlphaGrid;
