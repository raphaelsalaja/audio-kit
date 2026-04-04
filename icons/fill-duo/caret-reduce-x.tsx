import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretReduceX({
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
          d="M14.836 5.54799C14.427 5.33099 13.935 5.35702 13.549 5.61702L10.08 7.96602C9.736 8.19902 9.532 8.58599 9.532 9.00099C9.532 9.41599 9.736 9.80303 10.08 10.036L13.55 12.385C13.761 12.528 14.005 12.6 14.25 12.6C14.45 12.6 14.651 12.551 14.836 12.454C15.246 12.237 15.5 11.813 15.5 11.35V6.65199C15.5 6.18899 15.246 5.76499 14.836 5.54799Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.92 7.96504L4.45 5.61702C4.067 5.35702 3.574 5.33099 3.164 5.54799C2.754 5.76499 2.5 6.18899 2.5 6.65199V11.348C2.5 11.811 2.754 12.235 3.164 12.452C3.349 12.55 3.55 12.598 3.75 12.598C3.995 12.598 4.239 12.526 4.451 12.383L7.92 10.035C8.264 9.80199 8.468 9.41502 8.468 9.00002C8.468 8.58502 8.264 8.19804 7.92 7.96504Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CaretReduceX;
