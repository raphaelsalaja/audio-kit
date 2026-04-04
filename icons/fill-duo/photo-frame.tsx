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
          d="M4.75 1C4.33579 1 4 1.33579 4 1.75C4 2.44003 3.44054 3 2.75 3C2.33579 3 2 3.33579 2 3.75V14.25C2 14.6642 2.33579 15 2.75 15C3.44054 15 4 15.56 4 16.25C4 16.6642 4.33579 17 4.75 17H13.25C13.6642 17 14 16.6642 14 16.25C14 15.56 14.5595 15 15.25 15C15.6642 15 16 14.6642 16 14.25V3.75C16 3.33579 15.6642 3 15.25 3C14.5595 3 14 2.44003 14 1.75C14 1.33579 13.6642 1 13.25 1H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.10609 5.53934C6.80331 4.62754 7.8197 4 9 4C10.1803 4 11.1967 4.62754 11.8939 5.53934C12.5906 6.45046 13 7.67651 13 9C13 10.3235 12.5906 11.5495 11.8939 12.4607C11.1967 13.3725 10.1803 14 9 14C7.81974 14 6.80335 13.3724 6.10613 12.4607C5.40944 11.5496 5 10.3235 5 9C5 7.67651 5.40941 6.45046 6.10609 5.53934Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PhotoFrame;
