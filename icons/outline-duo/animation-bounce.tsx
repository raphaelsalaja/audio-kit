import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AnimationBounce({
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
          d="M13.75 8.75C15.1307 8.75 16.25 7.631 16.25 6.25C16.25 4.869 15.1307 3.75 13.75 3.75C12.3693 3.75 11.25 4.869 11.25 6.25C11.25 7.631 12.3693 8.75 13.75 8.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 8.75C15.1307 8.75 16.25 7.631 16.25 6.25C16.25 4.869 15.1307 3.75 13.75 3.75C12.3693 3.75 11.25 4.869 11.25 6.25C11.25 7.631 12.3693 8.75 13.75 8.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 3.75C2.49 4.647 3.35 5.881 4.062 7.469C5.291 10.209 5.499 12.708 5.5 14.25C5.602 13.359 5.894 11.846 6.854 10.25C7.4114 9.3242 8.0394 8.6257 8.5782 8.1224"
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

export default AnimationBounce;
