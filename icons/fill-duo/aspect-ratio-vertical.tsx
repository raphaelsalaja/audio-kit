import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AspectRatioVertical({
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
          d="M2 3.75V14.25C2 15.767 3.233 17 4.75 17H13.25C14.767 17 16 15.767 16 14.25V3.75C16 2.233 14.767 1 13.25 1H4.75C3.233 1 2 2.233 2 3.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.5 10.75V13.75C13.5 14.164 13.164 14.5 12.75 14.5H9.75C9.336 14.5 9 14.164 9 13.75C9 13.336 9.336 13 9.75 13H12V10.75C12 10.336 12.336 10 12.75 10C13.164 10 13.5 10.336 13.5 10.75ZM8.25 3.5C8.664 3.5 9 3.836 9 4.25C9 4.664 8.664 5 8.25 5H6V7.25C6 7.664 5.664 8 5.25 8C4.836 8 4.5 7.664 4.5 7.25V4.25C4.5 3.836 4.836 3.5 5.25 3.5H8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AspectRatioVertical;
