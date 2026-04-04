import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DropdownList({
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
          d="M9.2358 9.2471C9.7133 8.7657 10.3496 8.49951 11.0254 8.49951C11.3228 8.49951 11.6157 8.5517 11.897 8.6543L14.4913 9.60199L14.7501 6.75C14.7501 5.9216 14.0785 5.25 13.2501 5.25H3.75C2.9216 5.25 2.25 5.9216 2.25 6.75V9.75C2.25 10.5784 2.9216 11.25 3.75 11.25H8.4824C8.415 10.519 8.6954 9.7905 9.2358 9.2471Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 8.25H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 14.25H8.714"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 2.25H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 8.8981V6.75C14.75 5.922 14.078 5.25 13.25 5.25H3.75C2.922 5.25 2.25 5.922 2.25 6.75V9.75C2.25 10.578 2.922 11.25 3.75 11.25H7.7573"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.126 10.768L17.066 12.938C17.316 13.029 17.309 13.386 17.055 13.467L14.336 14.337L13.466 17.056C13.385 17.31 13.028 17.317 12.937 17.067L10.767 11.127C10.685 10.904 10.902 10.687 11.126 10.768Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M11.126 10.768L17.066 12.938C17.316 13.029 17.309 13.386 17.055 13.467L14.336 14.337L13.466 17.056C13.385 17.31 13.028 17.317 12.937 17.067L10.767 11.127C10.685 10.904 10.902 10.687 11.126 10.768Z"
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

export default DropdownList;
