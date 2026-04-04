import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowRightToLine({
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
          d="M15.25 2C14.836 2 14.5 2.336 14.5 2.75V15.25C14.5 15.664 14.836 16 15.25 16C15.664 16 16 15.664 16 15.25V2.75C16 2.336 15.664 2 15.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.78 4.46999C8.487 4.17699 8.012 4.17699 7.719 4.46999C7.426 4.76299 7.426 5.238 7.719 5.531L10.439 8.251H2.75C2.336 8.251 2 8.587 2 9.001C2 9.415 2.336 9.751 2.75 9.751H10.439L7.719 12.471C7.426 12.764 7.426 13.239 7.719 13.532C7.865 13.678 8.057 13.752 8.249 13.752C8.441 13.752 8.633 13.679 8.779 13.532L12.779 9.53199C13.072 9.23899 13.072 8.76399 12.779 8.47099L8.779 4.47099L8.78 4.46999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowRightToLine;
