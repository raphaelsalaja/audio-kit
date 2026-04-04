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
        <path
          d="M12.878 3.6958H3.92874V12.878C3.92874 13.5367 4.46331 14.0713 5.12198 14.0713L14.0713 14.0713V4.88903C14.0713 4.23037 13.5367 3.6958 12.878 3.6958Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path d="M7.5 6H6V7.5H7.5V6Z" fill={fill} stroke="none" />
        <path d="M10.5 6H9V7.5H10.5V6Z" fill={fill} stroke="none" />
        <path d="M12 7.5H10.5V9H12V7.5Z" fill={fill} stroke="none" />
        <path d="M9 7.5H7.5V9H9V7.5Z" fill={fill} stroke="none" />
        <path d="M7.5 9H6V10.5H7.5V9Z" fill={fill} stroke="none" />
        <path d="M10.5 9H9V10.5H10.5V9Z" fill={fill} stroke="none" />
        <path d="M12 10.5H10.5V12H12V10.5Z" fill={fill} stroke="none" />
        <path d="M9 10.5H7.5V12H9V10.5Z" fill={fill} stroke="none" />
        <path
          d="M6.75 3.75H12.25C13.3546 3.75 14.25 4.6454 14.25 5.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 3.75H3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 14.25H5.75C4.6454 14.25 3.75 13.3546 3.75 12.25V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CropAlphaGrid;
