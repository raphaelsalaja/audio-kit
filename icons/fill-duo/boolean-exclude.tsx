import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BooleanExclude({
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
          d="M7.75 6H12V10.25C12 11.2162 11.2162 12 10.25 12H6V7.75C6 6.78379 6.78379 6 7.75 6Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2 3.75C2 2.78379 2.78379 2 3.75 2H10.25C11.2162 2 12 2.78379 12 3.75V6H7.75C6.78379 6 6 6.78379 6 7.75V12H3.75C2.78379 12 2 11.2162 2 10.25V3.75ZM6 12H10.25C11.2162 12 12 11.2162 12 10.25V6H14.25C15.2162 6 16 6.78379 16 7.75V14.25C16 15.2162 15.2162 16 14.25 16H7.75C6.78379 16 6 15.2162 6 14.25V12Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BooleanExclude;
