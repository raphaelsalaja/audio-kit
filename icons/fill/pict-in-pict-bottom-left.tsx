import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PictInPictBottomLeft({
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
          d="M13.25 2H4.75C3.233 2 2 3.233 2 4.75V7.25C2 7.664 2.336 8 2.75 8C3.164 8 3.5 7.664 3.5 7.25V4.75C3.5 4.061 4.061 3.5 4.75 3.5H13.25C13.939 3.5 14.5 4.061 14.5 4.75V13.25C14.5 13.939 13.939 14.5 13.25 14.5H10.75C10.336 14.5 10 14.836 10 15.25C10 15.664 10.336 16 10.75 16H13.25C14.767 16 16 14.767 16 13.25V4.75C16 3.233 14.767 2 13.25 2Z"
          fill={fill}
        />
        <path
          d="M13.5 8.25C13.5 7.836 13.164 7.5 12.75 7.5H11.561L13.031 6.03003C13.324 5.73703 13.324 5.26199 13.031 4.96899C12.738 4.67599 12.263 4.67599 11.97 4.96899L10.5 6.43903V5.25C10.5 4.836 10.164 4.5 9.75 4.5C9.336 4.5 9 4.836 9 5.25V8.25C9 8.664 9.336 9 9.75 9H12.75C13.164 9 13.5 8.664 13.5 8.25Z"
          fill={secondaryfill}
        />
        <path
          d="M6.25 9H4.75C3.23122 9 2 10.2312 2 11.75V13.25C2 14.7688 3.23122 16 4.75 16H6.25C7.76878 16 9 14.7688 9 13.25V11.75C9 10.2312 7.76878 9 6.25 9Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default PictInPictBottomLeft;
