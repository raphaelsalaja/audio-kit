import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsExpandDiagonal5({
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
          d="M2.71951 14.2199L14.2192 2.72021L15.2799 3.78091L3.78021 15.2806L2.71951 14.2199Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.75 10.01C14.336 10.01 14 9.67401 14 9.26001V4H8.73999C8.32599 4 7.98999 3.664 7.98999 3.25C7.98999 2.836 8.32599 2.5 8.73999 2.5H14.75C15.164 2.5 15.5 2.836 15.5 3.25V9.26001C15.5 9.67401 15.164 10.01 14.75 10.01Z"
          fill={fill}
        />
        <path
          d="M9.26001 15.5H3.25C2.836 15.5 2.5 15.164 2.5 14.75V8.73999C2.5 8.32599 2.836 7.98999 3.25 7.98999C3.664 7.98999 4 8.32599 4 8.73999V14H9.26001C9.67401 14 10.01 14.336 10.01 14.75C10.01 15.164 9.67401 15.5 9.26001 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsExpandDiagonal5;
