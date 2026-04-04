import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowRightFromLine({
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
          d="M2.75 2C2.336 2 2 2.336 2 2.75V15.25C2 15.664 2.336 16 2.75 16C3.164 16 3.5 15.664 3.5 15.25V2.75C3.5 2.336 3.164 2 2.75 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.78 4.46999C11.487 4.17699 11.012 4.17699 10.719 4.46999C10.426 4.76299 10.426 5.238 10.719 5.531L13.439 8.251H5.75C5.336 8.251 5 8.587 5 9.001C5 9.415 5.336 9.751 5.75 9.751H13.439L10.719 12.471C10.426 12.764 10.426 13.239 10.719 13.532C10.865 13.678 11.057 13.752 11.249 13.752C11.441 13.752 11.633 13.679 11.779 13.532L15.779 9.53199C16.072 9.23899 16.072 8.76399 15.779 8.47099L11.779 4.47099L11.78 4.46999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowRightFromLine;
