import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowToCornerBottomLeft({
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
          d="M14.25 14.5H4.75C4.061 14.5 3.5 13.939 3.5 13.25V3.75C3.5 3.336 3.164 3 2.75 3C2.336 3 2 3.336 2 3.75V13.25C2 14.767 3.233 16 4.75 16H14.25C14.664 16 15 15.664 15 15.25C15 14.836 14.664 14.5 14.25 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.72 2.21999L8.5 8.44V4.74C8.5 4.326 8.164 3.99 7.75 3.99C7.336 3.99 7 4.326 7 4.74V10.25C7 10.664 7.336 11 7.75 11H13.26C13.674 11 14.01 10.664 14.01 10.25C14.01 9.83599 13.674 9.49999 13.26 9.49999H9.56L15.78 3.27999C16.073 2.98699 16.073 2.51199 15.78 2.21899C15.487 1.92599 15.012 1.92599 14.719 2.21899L14.72 2.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowToCornerBottomLeft;
