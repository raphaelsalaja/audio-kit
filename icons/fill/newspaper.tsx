import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Newspaper({
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
          d="M16.25 2H4.75C4.336 2 4 2.336 4 2.75V13.75C4 14.164 3.664 14.5 3.25 14.5C2.836 14.5 2.5 14.164 2.5 13.75V6.75C2.5 6.336 2.164 6 1.75 6C1.336 6 1 6.336 1 6.75V13.75C1 14.991 2.009 16 3.25 16H14.75C15.991 16 17 14.991 17 13.75V2.75C17 2.336 16.664 2 16.25 2ZM7 5.75C7 5.33579 7.33579 5 7.75 5H13.25C13.6642 5 14 5.33579 14 5.75V9.25C14 9.66421 13.6642 10 13.25 10H7.75C7.33579 10 7 9.66421 7 9.25V5.75ZM7.75 11.5C7.33579 11.5 7 11.8358 7 12.25C7 12.6642 7.33579 13 7.75 13H13.25C13.6642 13 14 12.6642 14 12.25C14 11.8358 13.6642 11.5 13.25 11.5H7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Newspaper;
