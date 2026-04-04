import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BooleanSubtract({
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
          d="M2 3.75C2 2.78379 2.78379 2 3.75 2H5.25C5.66421 2 6 2.33579 6 2.75C6 3.16421 5.66421 3.5 5.25 3.5H3.75C3.61221 3.5 3.5 3.61221 3.5 3.75V5C3.5 5.41421 3.16421 5.75 2.75 5.75C2.33579 5.75 2 5.41421 2 5V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8 2.75C8 2.33579 8.33579 2 8.75 2H10.25C11.2162 2 12 2.78379 12 3.75V10.25C12 11.2162 11.2162 12 10.25 12H3.75C2.78379 12 2 11.2162 2 10.25V8.75C2 8.33579 2.33579 8 2.75 8C3.16421 8 3.5 8.33579 3.5 8.75V10.25C3.5 10.3878 3.61221 10.5 3.75 10.5H10.25C10.3878 10.5 10.5 10.3878 10.5 10.25V3.75C10.5 3.61221 10.3878 3.5 10.25 3.5H8.75C8.33579 3.5 8 3.16421 8 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6 12V14.25C6 15.2162 6.78379 16 7.75 16H14.25C15.2162 16 16 15.2162 16 14.25V7.75C16 6.78379 15.2162 6 14.25 6H12V10.25C12 11.2162 11.2162 12 10.25 12H6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BooleanSubtract;
