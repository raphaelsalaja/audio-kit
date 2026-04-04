import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copies4({
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
          d="M10.7501 4.5H7.25012C5.73134 4.5 4.50012 5.73122 4.50012 7.25V10.75C4.50012 12.2688 5.73134 13.5 7.25012 13.5H10.7501C12.2689 13.5 13.5001 12.2688 13.5001 10.75V7.25C13.5001 5.73122 12.2689 4.5 10.7501 4.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 1H10.7501C9.23134 1 8.00012 2.23122 8.00012 3.75V7.25C8.00012 8.76878 9.23134 10 10.7501 10H14.2501C15.7689 10 17.0001 8.76878 17.0001 7.25V3.75C17.0001 2.23122 15.7689 1 14.2501 1Z"
          fill={fill}
        />
        <path
          d="M7.25012 13.5C5.73352 13.5 4.50012 12.2666 4.50012 10.75V8H3.75012C2.23352 8 1.00012 9.2334 1.00012 10.75V14.25C1.00012 15.7666 2.23352 17 3.75012 17H7.25012C8.76672 17 10.0001 15.7666 10.0001 14.25V13.5H7.25012Z"
          fill={secondaryfill}
          opacity="0.2"
        />
      </g>
    </svg>
  );
}

export default Copies4;
