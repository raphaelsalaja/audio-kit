import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseClip({
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
          d="M11.75 5.5C11.336 5.5 11 5.164 11 4.75V2.25C11 2.112 10.888 2 10.75 2H7.25C7.112 2 7 2.112 7 2.25V4.75C7 5.164 6.664 5.5 6.25 5.5C5.836 5.5 5.5 5.164 5.5 4.75V2.25C5.5 1.285 6.285 0.5 7.25 0.5H10.75C11.715 0.5 12.5 1.285 12.5 2.25V4.75C12.5 5.164 12.164 5.5 11.75 5.5Z"
          fill={fill}
        />
        <path
          d="M11 11.75C11 10.6458 11.8958 9.75 13 9.75C14.1042 9.75 15 10.6458 15 11.75V13.75C15 14.1642 14.6642 14.5 14.25 14.5C13.8358 14.5 13.5 14.1642 13.5 13.75V11.75C13.5 11.4742 13.2758 11.25 13 11.25C12.7242 11.25 12.5 11.4742 12.5 11.75V14.25C12.5 15.2168 13.2832 16 14.25 16C15.2168 16 16 15.2168 16 14.25V12.25C16 11.8358 16.3358 11.5 16.75 11.5C17.1642 11.5 17.5 11.8358 17.5 12.25V14.25C17.5 16.0452 16.0452 17.5 14.25 17.5C12.4548 17.5 11 16.0452 11 14.25V11.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9.83267 16C9.61799 15.4585 9.5 14.868 9.5 14.25V11.75C9.5 9.81736 11.0674 8.25 13 8.25C14.3358 8.25 15.497 8.99873 16.0869 10.0993C16.2965 10.0347 16.5192 10 16.75 10C16.8345 10 16.9179 10.0047 17 10.0137V6.75C17 5.233 15.767 4 14.25 4H3.75C2.233 4 1 5.233 1 6.75V13.25C1 14.767 2.233 16 3.75 16H9.83267Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SuitcaseClip;
