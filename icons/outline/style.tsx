import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Style({
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
          d="M10.657 7.01001L9.39499 6.58002L8.974 5.31C8.837 4.9 8.16199 4.9 8.02499 5.31L7.604 6.58002L6.34201 7.01001C6.13801 7.07001 6 7.26999 6 7.47999C6 7.69999 6.13801 7.89003 6.34201 7.96003L7.604 8.38001L8.02499 9.65998C8.09299 9.85998 8.285 10 8.5 10C8.715 10 8.90601 9.85998 8.97501 9.65998L9.396 8.38001L10.658 7.96003C10.862 7.89003 11 7.69999 11 7.47999C11 7.26999 10.861 7.07001 10.657 7.01001Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M11.75 12C12.164 12 12.5 11.66 12.5 11.25C12.5 10.84 12.164 10.5 11.75 10.5C11.336 10.5 11 10.84 11 11.25C11 11.66 11.336 12 11.75 12Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M9.75821 2.75H4.75C3.645 2.75 2.75 3.65 2.75 4.75V13.25C2.75 14.35 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.35 15.25 13.25V8.19849"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.589 2.39002L16.074 1.88001L15.569 0.370002C15.405 -0.119998 14.594 -0.119998 14.43 0.370002L13.925 1.88001L12.41 2.39002C12.165 2.47002 12 2.70003 12 2.96003C12 3.22003 12.165 3.45004 12.41 3.53004L13.925 4.03004L14.43 5.54999C14.512 5.78999 14.742 5.96003 15 5.96003C15.258 5.96003 15.487 5.78999 15.57 5.54999L16.075 4.03004L17.59 3.53004C17.835 3.45004 18 3.21993 18 2.96003C18 2.70013 17.834 2.46992 17.589 2.39002Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Style;
