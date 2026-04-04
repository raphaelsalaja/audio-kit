import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Post({
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
          d="M4.75 2C3.23079 2 2 3.23079 2 4.75V13.25C2 14.7692 3.23079 16 4.75 16H13.25C14.7692 16 16 14.7692 16 13.25V4.75C16 3.23079 14.7692 2 13.25 2H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5 12.25C5 11.8358 5.33579 11.5 5.75 11.5H9.25C9.66421 11.5 10 11.8358 10 12.25C10 12.6642 9.66421 13 9.25 13H5.75C5.33579 13 5 12.6642 5 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 9.25C5 8.83579 5.33579 8.5 5.75 8.5H12.25C12.6642 8.5 13 8.83579 13 9.25C13 9.66421 12.6642 10 12.25 10H5.75C5.33579 10 5 9.66421 5 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6 7C6.552 7 7 6.552 7 6C7 5.448 6.552 5 6 5C5.448 5 5 5.448 5 6C5 6.552 5.448 7 6 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Post;
