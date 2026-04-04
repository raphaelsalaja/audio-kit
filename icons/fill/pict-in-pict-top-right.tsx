import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PictInPictTopRight({
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
          d="M4.75 16H13.25C14.767 16 16 14.767 16 13.25V10.75C16 10.336 15.664 10 15.25 10C14.836 10 14.5 10.336 14.5 10.75V13.25C14.5 13.939 13.939 14.5 13.25 14.5H4.75C4.061 14.5 3.5 13.939 3.5 13.25V4.75C3.5 4.061 4.061 3.5 4.75 3.5H7.25C7.664 3.5 8 3.164 8 2.75C8 2.336 7.664 2 7.25 2H4.75C3.233 2 2 3.233 2 4.75V13.25C2 14.767 3.233 16 4.75 16Z"
          fill={fill}
        />
        <path
          d="M4.5 9.75C4.5 10.164 4.836 10.5 5.25 10.5H6.439L4.969 11.97C4.676 12.263 4.676 12.738 4.969 13.031C5.262 13.324 5.737 13.324 6.03 13.031L7.5 11.561V12.75C7.5 13.164 7.836 13.5 8.25 13.5C8.664 13.5 9 13.164 9 12.75V9.75C9 9.336 8.664 9 8.25 9H5.25C4.836 9 4.5 9.336 4.5 9.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25 2H11.75C10.2312 2 9 3.23122 9 4.75V6.25C9 7.76878 10.2312 9 11.75 9H13.25C14.7688 9 16 7.76878 16 6.25V4.75C16 3.23122 14.7688 2 13.25 2Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default PictInPictTopRight;
