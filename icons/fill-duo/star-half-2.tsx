import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarHalf2({
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
          d="M8.99998 1.03419C8.72708 1.03419 8.45407 1.1621 8.32707 1.418L6.26167 5.6035L1.64259 6.2749C1.35939 6.3159 1.12499 6.5137 1.03709 6.7852C0.948189 7.0567 1.02247 7.355 1.22657 7.5542L4.56938 10.8125L3.77937 15.4131C3.73147 15.6943 3.84678 15.979 4.07728 16.147C4.30778 16.314 4.61439 16.3365 4.86729 16.2041L9.00007 14.0322L8.99998 1.03419Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default StarHalf2;
