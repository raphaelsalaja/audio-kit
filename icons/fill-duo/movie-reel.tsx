import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MovieReel({
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
          d="M1 9C1 4.58179 4.58179 1 9 1C13.4182 1 17 4.58179 17 9C17 13.4182 13.4182 17 9 17C4.58179 17 1 13.4182 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 17H16.25C16.6642 17 17 16.6642 17 16.25C17 15.8358 16.6642 15.5 16.25 15.5H13.6647C12.3515 16.444 10.7407 17 9 17Z"
          fill={fill}
        />
        <path
          d="M9 7C9.828 7 10.5 6.328 10.5 5.5C10.5 4.672 9.828 4 9 4C8.172 4 7.5 4.672 7.5 5.5C7.5 6.328 8.172 7 9 7Z"
          fill={fill}
        />
        <path
          d="M12.5 10.5C13.328 10.5 14 9.828 14 9C14 8.172 13.328 7.5 12.5 7.5C11.672 7.5 11 8.172 11 9C11 9.828 11.672 10.5 12.5 10.5Z"
          fill={fill}
        />
        <path
          d="M9 14C9.828 14 10.5 13.328 10.5 12.5C10.5 11.672 9.828 11 9 11C8.172 11 7.5 11.672 7.5 12.5C7.5 13.328 8.172 14 9 14Z"
          fill={fill}
        />
        <path
          d="M5.5 10.5C6.328 10.5 7 9.828 7 9C7 8.172 6.328 7.5 5.5 7.5C4.672 7.5 4 8.172 4 9C4 9.828 4.672 10.5 5.5 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MovieReel;
