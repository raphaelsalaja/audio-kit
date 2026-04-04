import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaPlayPauseToggle({
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
          d="M0 13.156V4.84399C0 4.06779 0.679871 3.52298 1.38288 3.59944C1.67972 3.63172 1.92671 3.79042 2.1819 3.93181L9.35599 7.90669C10.216 8.38207 10.2157 9.61917 9.35561 10.0945L1.85542 14.2491C1.02183 14.7114 0 14.1076 0 13.156Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17.25 3C17.6642 3 18 3.33579 18 3.75V14.25C18 14.6642 17.6642 15 17.25 15C16.8358 15 16.5 14.6642 16.5 14.25V3.75C16.5 3.33579 16.8358 3 17.25 3Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.25 3C12.6642 3 13 3.33579 13 3.75V14.25C13 14.6642 12.6642 15 12.25 15C11.8358 15 11.5 14.6642 11.5 14.25V3.75C11.5 3.33579 11.8358 3 12.25 3Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MediaPlayPauseToggle;
