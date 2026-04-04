import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AnimationFast({
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
          d="M13.7722 3.63367C12.6983 2.55977 10.9571 2.55977 9.88317 3.63367L6.46148 7.05562C5.38731 8.12972 5.38776 9.8704 6.46114 10.945L9.88317 14.3663C10.9571 15.4401 12.6983 15.4402 13.7722 14.3664L17.1939 10.9454C18.2671 9.87076 18.268 8.12976 17.194 7.05568L13.7722 3.63367Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M0 9C0 8.58579 0.335786 8.25 0.75 8.25H3.5C3.91421 8.25 4.25 8.58579 4.25 9C4.25 9.41421 3.91421 9.75 3.5 9.75H0.75C0.335786 9.75 0 9.41421 0 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.25 5.75C2.25 5.33579 2.58579 5 3 5H4.75C5.16421 5 5.5 5.33579 5.5 5.75C5.5 6.16421 5.16421 6.5 4.75 6.5H3C2.58579 6.5 2.25 6.16421 2.25 5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.25 12.25C2.25 11.8358 2.58579 11.5 3 11.5H4.75C5.16421 11.5 5.5 11.8358 5.5 12.25C5.5 12.6642 5.16421 13 4.75 13H3C2.58579 13 2.25 12.6642 2.25 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AnimationFast;
