import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhotoFrame({
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
          d="M14 1.75C14 2.439 14.561 3 15.25 3C15.664 3 16 3.336 16 3.75V14.25C16 14.664 15.664 15 15.25 15C14.561 15 14 15.561 14 16.25C14 16.664 13.664 17 13.25 17H4.75C4.336 17 4 16.664 4 16.25C4 15.561 3.439 15 2.75 15C2.336 15 2 14.664 2 14.25V3.75C2 3.336 2.336 3 2.75 3C3.439 3 4 2.439 4 1.75C4 1.336 4.336 1 4.75 1H13.25C13.664 1 14 1.336 14 1.75ZM9 4C7.8197 4 6.80331 4.62754 6.10609 5.53934C5.40941 6.45046 5 7.67651 5 9C5 10.3235 5.40944 11.5496 6.10613 12.4607C6.80335 13.3724 7.81975 14 9 14C10.1803 14 11.1967 13.3725 11.8939 12.4607C12.5906 11.5495 13 10.3235 13 9C13 7.67651 12.5906 6.45046 11.8939 5.53934C11.1967 4.62754 10.1803 4 9 4Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PhotoFrame;
