import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChildHead({
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
          d="M17.25 9C17.25 8.038 16.473 7.259 15.513 7.251C14.742 4.372 12.122 2.25 9 2.25C5.878 2.25 3.258 4.373 2.487 7.251C1.527 7.258 0.75 8.038 0.75 9C0.75 9.962 1.527 10.741 2.487 10.749C3.258 13.628 5.878 15.75 9 15.75C12.122 15.75 14.742 13.627 15.513 10.749C16.473 10.742 17.25 9.962 17.25 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.416 5.662C10.054 6.025 9.553 6.25 9 6.25C7.895 6.25 7 5.355 7 4.25C7 3.145 7.895 2.25 9 2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 9C17.25 8.038 16.473 7.259 15.513 7.251C14.742 4.372 12.122 2.25 9 2.25C5.878 2.25 3.258 4.373 2.487 7.251C1.527 7.258 0.75 8.038 0.75 9C0.75 9.962 1.527 10.741 2.487 10.749C3.258 13.628 5.878 15.75 9 15.75C12.122 15.75 14.742 13.627 15.513 10.749C16.473 10.742 17.25 9.962 17.25 9Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.66701 11H10.334C10.702 11 11.001 11.299 11.001 11.667C11.001 12.771 10.105 13.667 9.00101 13.667C7.89701 13.667 7.00101 12.771 7.00101 11.667C7.00101 11.299 7.30001 11 7.66801 11H7.66701Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ChildHead;
