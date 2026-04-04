import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PictInPictTopLeft({
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
          d="M16 13.25V4.75C16 3.233 14.767 2 13.25 2H10.75C10.336 2 10 2.336 10 2.75C10 3.164 10.336 3.5 10.75 3.5H13.25C13.939 3.5 14.5 4.061 14.5 4.75V13.25C14.5 13.939 13.939 14.5 13.25 14.5H4.75C4.061 14.5 3.5 13.939 3.5 13.25V10.75C3.5 10.336 3.164 10 2.75 10C2.336 10 2 10.336 2 10.75V13.25C2 14.767 3.233 16 4.75 16H13.25C14.767 16 16 14.767 16 13.25Z"
          fill={fill}
        />
        <path
          d="M9.75 13.5C10.164 13.5 10.5 13.164 10.5 12.75V11.561L11.97 13.031C12.263 13.324 12.738 13.324 13.031 13.031C13.324 12.738 13.324 12.263 13.031 11.97L11.561 10.5H12.75C13.164 10.5 13.5 10.164 13.5 9.75C13.5 9.336 13.164 9 12.75 9H9.75C9.336 9 9 9.336 9 9.75V12.75C9 13.164 9.336 13.5 9.75 13.5Z"
          fill={secondaryfill}
        />
        <path
          d="M6.25 2H4.75C3.23122 2 2 3.23122 2 4.75V6.25C2 7.76878 3.23122 9 4.75 9H6.25C7.76878 9 9 7.76878 9 6.25V4.75C9 3.23122 7.76878 2 6.25 2Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default PictInPictTopLeft;
