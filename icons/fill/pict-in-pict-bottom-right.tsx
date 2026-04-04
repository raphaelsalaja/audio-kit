import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PictInPictBottomRight({
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
          d="M2 4.75V13.25C2 14.767 3.233 16 4.75 16H7.25C7.664 16 8 15.664 8 15.25C8 14.836 7.664 14.5 7.25 14.5H4.75C4.061 14.5 3.5 13.939 3.5 13.25V4.75C3.5 4.061 4.061 3.5 4.75 3.5H13.25C13.939 3.5 14.5 4.061 14.5 4.75V7.25C14.5 7.664 14.836 8 15.25 8C15.664 8 16 7.664 16 7.25V4.75C16 3.233 14.767 2 13.25 2H4.75C3.233 2 2 3.233 2 4.75Z"
          fill={fill}
        />
        <path
          d="M8.25 4.5C7.836 4.5 7.5 4.836 7.5 5.25V6.43903L6.03 4.96899C5.737 4.67599 5.26199 4.67599 4.96899 4.96899C4.67599 5.26199 4.67599 5.73703 4.96899 6.03003L6.439 7.5H5.25C4.836 7.5 4.5 7.836 4.5 8.25C4.5 8.664 4.836 9 5.25 9H8.25C8.664 9 9 8.664 9 8.25V5.25C9 4.836 8.664 4.5 8.25 4.5Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25 9H11.75C10.2312 9 9 10.2312 9 11.75V13.25C9 14.7688 10.2312 16 11.75 16H13.25C14.7688 16 16 14.7688 16 13.25V11.75C16 10.2312 14.7688 9 13.25 9Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default PictInPictBottomRight;
