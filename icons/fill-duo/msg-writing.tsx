import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgWriting({
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
          d="M9 10C8.448 10 8 9.551 8 9C8 8.449 8.448 8 9 8C9.552 8 10 8.449 10 9C10 9.551 9.552 10 9 10Z"
          fill={fill}
          opacity="0.75"
        />
        <path
          d="M5.5 10C4.948 10 4.5 9.551 4.5 9C4.5 8.449 4.948 8 5.5 8C6.052 8 6.5 8.449 6.5 9C6.5 9.551 6.052 10 5.5 10Z"
          fill={fill}
        />
        <path
          d="M12.5 10C11.948 10 11.5 9.551 11.5 9C11.5 8.449 11.948 8 12.5 8C13.052 8 13.5 8.449 13.5 9C13.5 9.551 13.052 10 12.5 10Z"
          fill={fill}
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

export default MsgWriting;
