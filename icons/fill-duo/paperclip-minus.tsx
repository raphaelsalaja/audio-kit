import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperclipMinus({
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
          d="M10.5 4.25C10.5 3.83579 10.8358 3.5 11.25 3.5H16.25C16.6642 3.5 17 3.83579 17 4.25C17 4.66421 16.6642 5 16.25 5H11.25C10.8358 5 10.5 4.66421 10.5 4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 4.75C2 2.67879 3.67879 1 5.75 1C7.82121 1 9.5 2.67879 9.5 4.75V11.75C9.5 12.9922 8.49221 14 7.25 14C6.00779 14 5 12.9922 5 11.75V5C5 4.58579 5.33579 4.25 5.75 4.25C6.16421 4.25 6.5 4.58579 6.5 5V11.75C6.5 12.1638 6.83621 12.5 7.25 12.5C7.66379 12.5 8 12.1638 8 11.75V4.75C8 3.50721 6.99279 2.5 5.75 2.5C4.50721 2.5 3.5 3.50721 3.5 4.75V11.75C3.5 13.8208 5.17921 15.5 7.25 15.5C9.32079 15.5 11 13.8208 11 11.75V7.75C11 7.33579 11.3358 7 11.75 7C12.1642 7 12.5 7.33579 12.5 7.75V11.75C12.5 14.6492 10.1492 17 7.25 17C4.35079 17 2 14.6492 2 11.75V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PaperclipMinus;
