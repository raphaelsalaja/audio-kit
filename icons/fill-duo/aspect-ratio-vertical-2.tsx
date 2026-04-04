import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AspectRatioVertical2({
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
          d="M13.25 1H4.75C3.233 1 2 2.233 2 3.75V14.25C2 15.767 3.233 17 4.75 17H13.25C14.767 17 16 15.767 16 14.25V3.75C16 2.233 14.767 1 13.25 1Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.25 10C5.664 10 6 10.336 6 10.75V13H8.25C8.664 13 9 13.336 9 13.75C9 14.164 8.664 14.5 8.25 14.5H5.25C4.836 14.5 4.5 14.164 4.5 13.75V10.75C4.5 10.336 4.836 10 5.25 10ZM12.75 3.5C13.164 3.5 13.5 3.836 13.5 4.25V7.25C13.5 7.664 13.164 8 12.75 8C12.336 8 12 7.664 12 7.25V5H9.75C9.336 5 9 4.664 9 4.25C9 3.836 9.336 3.5 9.75 3.5H12.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AspectRatioVertical2;
