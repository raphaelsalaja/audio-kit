import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StickerSquare({
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
          d="M4.75 2C3.23201 2 2 3.22456 2 4.75V13.25C2 14.7754 3.23201 16 4.75 16H7.515C9.30492 16 11.0221 15.2917 12.2886 14.0201L14.0226 12.2911C15.2814 11.0317 16 9.29004 16 7.51001V4.75C16 3.22456 14.768 2 13.25 2H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16 7L15.8787 7.48507C15.6561 8.37541 14.8562 9 13.9384 9H11.25C9.73201 9 9 10.2246 9 11.75V13.9384C9 14.8562 8.37541 15.6561 7.48507 15.8787L7 16L7.51498 16C7.62685 16 7.73846 15.9972 7.84967 15.9917C9.5178 15.9093 11.1013 15.2122 12.2886 14.0201L14.0225 12.2911C15.2813 11.0317 16 9.29004 16 7.51L16 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StickerSquare;
