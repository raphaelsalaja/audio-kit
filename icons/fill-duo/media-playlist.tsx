import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaPlaylist({
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
          d="M12 16.25C12 15.8358 12.3358 15.5 12.75 15.5H17.25C17.6642 15.5 18 15.8358 18 16.25C18 16.6642 17.6642 17 17.25 17H12.75C12.3358 17 12 16.6642 12 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 13.25C12 12.8358 12.3358 12.5 12.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H12.75C12.3358 14 12 13.6642 12 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 9C1 4.58169 4.58169 1 9 1C13.4183 1 17 4.58169 17 9C17 9.69061 16.9125 10.3608 16.748 11H12.75C11.5074 11 10.5 12.0074 10.5 13.25C10.5 13.8263 10.7166 14.3519 11.0729 14.75C10.7166 15.1481 10.5 15.6737 10.5 16.25C10.5 16.4557 10.5276 16.6549 10.5793 16.8442C10.0687 16.9464 9.54063 17 9 17C4.58169 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 6.87103C6.5 5.90502 7.54773 5.30637 8.37956 5.79098L12.0308 7.92012C12.8581 8.4025 12.8581 9.59854 12.0308 10.0809L8.37982 12.2099C7.54799 12.6945 6.5 12.096 6.5 11.13V6.87103Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MediaPlaylist;
