import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretReduceY({
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
          d="M10.035 10.081C9.569 9.393 8.431 9.393 7.965 10.081L5.617 13.549C5.357 13.933 5.331 14.426 5.548 14.836C5.765 15.246 6.18899 15.5 6.65199 15.5H11.348C11.811 15.5 12.235 15.246 12.452 14.836C12.669 14.427 12.643 13.934 12.383 13.549L10.035 10.081Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.348 2.5H6.65199C6.18899 2.5 5.765 2.754 5.548 3.164C5.331 3.573 5.357 4.06599 5.617 4.45099L7.965 7.91901C8.198 8.26301 8.585 8.46802 9 8.46802C9.415 8.46802 9.802 8.26201 10.035 7.91901L12.383 4.45099C12.643 4.06699 12.669 3.574 12.452 3.164C12.235 2.754 11.811 2.5 11.348 2.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CaretReduceY;
