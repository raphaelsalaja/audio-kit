import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BooleanUnion({
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
          d="M3.75 2C2.78379 2 2 2.78379 2 3.75V10.25C2 11.2162 2.78379 12 3.75 12H6V14.25C6 15.2162 6.78379 16 7.75 16H14.25C15.2162 16 16 15.2162 16 14.25V7.75C16 6.78379 15.2162 6 14.25 6H12V3.75C12 2.78379 11.2162 2 10.25 2H3.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BooleanUnion;
