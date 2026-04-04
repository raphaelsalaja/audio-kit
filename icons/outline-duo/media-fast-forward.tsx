import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaFastForward({
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
          d="M9.492 4.407L16.993 8.563C17.337 8.753 17.337 9.248 16.993 9.438L9.492 13.594C9.159 13.779 8.75 13.538 8.75 13.157V4.844C8.75 4.463 9.159 4.222 9.492 4.407Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.75 9.572L1.492 13.593C1.159 13.778 0.75 13.537 0.75 13.156V4.844C0.75 4.463 1.159 4.222 1.492 4.407L8.75 8.428"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.492 4.407L16.993 8.563C17.337 8.753 17.337 9.248 16.993 9.438L9.492 13.594C9.159 13.779 8.75 13.538 8.75 13.157V4.844C8.75 4.463 9.159 4.222 9.492 4.407Z"
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

export default MediaFastForward;
