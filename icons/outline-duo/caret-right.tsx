import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretRight({
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
          d="M14.209 8.155L6.286 3.131C5.62 2.709 4.75 3.187 4.75 3.976V14.025C4.75 14.813 5.62 15.292 6.286 14.87L14.209 9.845C14.828 9.452 14.828 8.549 14.209 8.156V8.155Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.209 8.155L6.286 3.131C5.62 2.709 4.75 3.187 4.75 3.976V14.025C4.75 14.813 5.62 15.292 6.286 14.87L14.209 9.845C14.828 9.452 14.828 8.549 14.209 8.156V8.155Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CaretRight;
