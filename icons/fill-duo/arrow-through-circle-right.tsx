import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowThroughCircleRight({
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
          d="M7.5 14C10.2614 14 12.5 11.7614 12.5 9C12.5 6.23858 10.2614 4 7.5 4C4.73858 4 2.5 6.23858 2.5 9C2.5 11.7614 4.73858 14 7.5 14Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M17.779 8.47089L17.78 8.46989L14.78 5.46989C14.487 5.17689 14.012 5.17689 13.719 5.46989C13.426 5.76289 13.426 6.23799 13.719 6.53089L15.439 8.25089H12.4245C12.4618 8.49699 12.5 8.74329 12.5 8.99989C12.5 9.25719 12.4618 9.50409 12.4243 9.75089H15.439L13.719 11.4709C13.426 11.7639 13.426 12.239 13.719 12.5319C13.865 12.6779 14.057 12.7519 14.249 12.7519C14.441 12.7519 14.633 12.6789 14.779 12.5319L17.779 9.5319C18.072 9.2389 18.072 8.76379 17.779 8.47089Z"
          fill={fill}
        />
        <path
          d="M7.5 9.75H0.75C0.3359 9.75 0 9.4141 0 9C0 8.5859 0.3359 8.25 0.75 8.25H7.5C7.9141 8.25 8.25 8.5859 8.25 9C8.25 9.4141 7.9141 9.75 7.5 9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowThroughCircleRight;
