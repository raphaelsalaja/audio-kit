import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodeAction({
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
          d="M9 5C9.41421 5 9.75 5.33579 9.75 5.75V12.25C9.75 12.6642 9.41421 13 9 13C8.58579 13 8.25 12.6642 8.25 12.25V5.75C8.25 5.33579 8.58579 5 9 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 6C10.3807 6 11.5 4.88071 11.5 3.5C11.5 2.11929 10.3807 1 9 1C7.61929 1 6.5 2.11929 6.5 3.5C6.5 4.88071 7.61929 6 9 6Z"
          fill={fill}
        />
        <path
          d="M9 17C10.3807 17 11.5 15.8807 11.5 14.5C11.5 13.1193 10.3807 12 9 12C7.61929 12 6.5 13.1193 6.5 14.5C6.5 15.8807 7.61929 17 9 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CodeAction;
