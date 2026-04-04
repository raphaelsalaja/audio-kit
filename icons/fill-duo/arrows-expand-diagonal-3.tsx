import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsExpandDiagonal3({
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
          d="M2.2195 14.7198L14.7197 2.2196L15.7804 3.2803L3.2802 15.7805L2.2195 14.7198Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 8C14.836 8 14.5 7.664 14.5 7.25V3.5H10.75C10.336 3.5 10 3.164 10 2.75C10 2.336 10.336 2 10.75 2H15.25C15.664 2 16 2.336 16 2.75V7.25C16 7.664 15.664 8 15.25 8Z"
          fill={fill}
        />
        <path
          d="M7.25 16H2.75C2.336 16 2 15.664 2 15.25V10.75C2 10.336 2.336 10 2.75 10C3.164 10 3.5 10.336 3.5 10.75V14.5H7.25C7.664 14.5 8 14.836 8 15.25C8 15.664 7.664 16 7.25 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsExpandDiagonal3;
