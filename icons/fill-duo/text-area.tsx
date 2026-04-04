import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextArea({
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
          d="M2 10.75C2 10.3358 2.33579 10 2.75 10H15.25C15.6642 10 16 10.3358 16 10.75C16 11.1642 15.6642 11.5 15.25 11.5H2.75C2.33579 11.5 2 11.1642 2 10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 14.25C2 13.8358 2.33579 13.5 2.75 13.5H8.25C8.66421 13.5 9 13.8358 9 14.25C9 14.6642 8.66421 15 8.25 15H2.75C2.33579 15 2 14.6642 2 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 7.25C2 6.83579 2.33579 6.5 2.75 6.5H15.25C15.6642 6.5 16 6.83579 16 7.25C16 7.66421 15.6642 8 15.25 8H2.75C2.33579 8 2 7.66421 2 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 3.75C2 3.33579 2.33579 3 2.75 3H15.25C15.6642 3 16 3.33579 16 3.75C16 4.16421 15.6642 4.5 15.25 4.5H2.75C2.33579 4.5 2 4.16421 2 3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextArea;
