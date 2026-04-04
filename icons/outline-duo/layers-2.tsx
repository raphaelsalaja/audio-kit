import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Layers2({
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
          d="M2.665 6.711L8.535 3.62C8.827 3.466 9.175 3.466 9.467 3.62L15.337 6.711C15.871 6.992 15.871 7.757 15.337 8.038L9.467 11.129C9.175 11.283 8.827 11.283 8.535 11.129L2.665 8.038C2.131 7.757 2.131 6.992 2.665 6.711Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.665 6.711L8.535 3.62C8.827 3.466 9.175 3.466 9.467 3.62L15.337 6.711C15.871 6.992 15.871 7.757 15.337 8.038L9.467 11.129C9.175 11.283 8.827 11.283 8.535 11.129L2.665 8.038C2.131 7.757 2.131 6.992 2.665 6.711Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.736 10.625C15.736 10.886 15.602 11.148 15.335 11.289L9.46499 14.38C9.17299 14.534 8.82499 14.534 8.53299 14.38L2.66299 11.289C2.39599 11.148 2.26199 10.887 2.26199 10.625"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Layers2;
