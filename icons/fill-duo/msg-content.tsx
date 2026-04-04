import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgContent({
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
          d="M9.00002 1C4.58181 1 1.00002 4.58179 1.00002 9C1.00002 10.4506 1.39246 11.8068 2.06488 12.977C2.09295 13.0343 2.13116 13.1672 2.13177 13.3972C2.13238 13.6268 2.09518 13.9039 2.01741 14.1997C1.85824 14.8052 1.55932 15.3797 1.2194 15.72C1.01031 15.9293 0.943812 16.242 1.04964 16.5183C1.15547 16.7946 1.41385 16.9828 1.70928 16.9989C2.44913 17.0391 3.26319 16.8932 3.96902 16.6876C4.4872 16.5366 4.98601 16.3421 5.39182 16.1345C5.91986 16.4026 6.63844 16.6947 7.52247 16.8619C8.00127 16.9526 8.49599 17 9.00002 17C13.4182 17 17 13.4182 17 9C17 4.58179 13.4182 1 9.00002 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5 7.25C5 6.83579 5.33579 6.5 5.75 6.5H12.25C12.6642 6.5 13 6.83579 13 7.25C13 7.66421 12.6642 8 12.25 8H5.75C5.33579 8 5 7.66421 5 7.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 10.75C5 10.3358 5.33579 10 5.75 10H10.25C10.6642 10 11 10.3358 11 10.75C11 11.1642 10.6642 11.5 10.25 11.5H5.75C5.33579 11.5 5 11.1642 5 10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MsgContent;
