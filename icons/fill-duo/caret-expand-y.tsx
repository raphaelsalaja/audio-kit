import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretExpandY({
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
          d="M11.348 10H6.65201C6.18901 10 5.765 10.254 5.548 10.664C5.331 11.073 5.357 11.566 5.617 11.951L7.965 15.419C8.198 15.763 8.58501 15.968 9.00001 15.968C9.41501 15.968 9.80201 15.762 10.035 15.419L12.383 11.951C12.643 11.567 12.669 11.074 12.452 10.664C12.235 10.254 11.811 10 11.348 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.035 2.581C9.56901 1.893 8.431 1.893 7.965 2.581L5.617 6.04902C5.357 6.43302 5.331 6.92601 5.548 7.33601C5.765 7.74601 6.18901 8.00001 6.65201 8.00001H11.348C11.811 8.00001 12.235 7.74601 12.452 7.33601C12.669 6.92701 12.643 6.43402 12.383 6.04902L10.035 2.581Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CaretExpandY;
