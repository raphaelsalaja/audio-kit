import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Post2({
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
          d="M2 11.75C2 11.3358 2.33579 11 2.75 11H15.25C15.6642 11 16 11.3358 16 11.75C16 12.1642 15.6642 12.5 15.25 12.5H2.75C2.33579 12.5 2 12.1642 2 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 15.25C2 14.8358 2.33579 14.5 2.75 14.5H9.25C9.66421 14.5 10 14.8358 10 15.25C10 15.6642 9.66421 16 9.25 16H2.75C2.33579 16 2 15.6642 2 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.75 7.5C6.269 7.5 7.5 6.269 7.5 4.75C7.5 3.231 6.269 2 4.75 2C3.231 2 2 3.231 2 4.75C2 6.269 3.231 7.5 4.75 7.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Post2;
