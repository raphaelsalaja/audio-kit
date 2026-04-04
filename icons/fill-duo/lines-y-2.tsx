import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LinesY2({
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
          d="M2.75 7C3.16421 7 3.5 7.33579 3.5 7.75V13.25C3.5 13.6642 3.16421 14 2.75 14C2.33579 14 2 13.6642 2 13.25V7.75C2 7.33579 2.33579 7 2.75 7Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.25 4C15.6642 4 16 4.33579 16 4.75V13.25C16 13.6642 15.6642 14 15.25 14C14.8358 14 14.5 13.6642 14.5 13.25V4.75C14.5 4.33579 14.8358 4 15.25 4Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 2C7.41421 2 7.75 2.33579 7.75 2.75V15.25C7.75 15.6642 7.41421 16 7 16C6.58579 16 6.25 15.6642 6.25 15.25V2.75C6.25 2.33579 6.58579 2 7 2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11 7C11.4142 7 11.75 7.33579 11.75 7.75V10.25C11.75 10.6642 11.4142 11 11 11C10.5858 11 10.25 10.6642 10.25 10.25V7.75C10.25 7.33579 10.5858 7 11 7Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 12.5C11.4142 12.5 11.75 12.8358 11.75 13.25V14.25C11.75 14.6642 11.4142 15 11 15C10.5858 15 10.25 14.6642 10.25 14.25V13.25C10.25 12.8358 10.5858 12.5 11 12.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LinesY2;
