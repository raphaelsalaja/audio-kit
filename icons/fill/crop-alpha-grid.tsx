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
        <path d="M7.5 6H6V7.5H7.5V6Z" fill={secondaryfill} />
        <path d="M10.5 6H9V7.5H10.5V6Z" fill={secondaryfill} />
        <path d="M12 7.5H10.5V9H12V7.5Z" fill={secondaryfill} />
        <path d="M9 7.5H7.5V9H9V7.5Z" fill={secondaryfill} />
        <path d="M7.5 9H6V10.5H7.5V9Z" fill={secondaryfill} />
        <path d="M10.5 9H9V10.5H10.5V9Z" fill={secondaryfill} />
        <path d="M12 10.5H10.5V12H12V10.5Z" fill={secondaryfill} />
        <path d="M9 10.5H7.5V12H9V10.5Z" fill={secondaryfill} />
        <path
          d="M6 3.75C6 3.33579 6.33579 3 6.75 3H12.25C13.7688 3 15 4.23119 15 5.75V16.25C15 16.6642 14.6642 17 14.25 17C13.8358 17 13.5 16.6642 13.5 16.25V5.75C13.5 5.05961 12.9404 4.5 12.25 4.5H6.75C6.33579 4.5 6 4.16421 6 3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 3.75C1 3.33579 1.33579 3 1.75 3H3.75C4.16421 3 4.5 3.33579 4.5 3.75C4.5 4.16421 4.16421 4.5 3.75 4.5H1.75C1.33579 4.5 1 4.16421 1 3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.75 1C4.16421 1 4.5 1.33579 4.5 1.75V12.25C4.5 12.9404 5.05961 13.5 5.75 13.5H16.25C16.6642 13.5 17 13.8358 17 14.25C17 14.6642 16.6642 15 16.25 15H5.75C4.23119 15 3 13.7688 3 12.25V1.75C3 1.33579 3.33579 1 3.75 1Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CropAlphaGrid;
