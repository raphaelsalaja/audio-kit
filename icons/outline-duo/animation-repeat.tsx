import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AnimationRepeat({
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
          d="M14.25 1.75H9.75C8.64543 1.75 7.75 2.64543 7.75 3.75V8.25C7.75 9.35457 8.64543 10.25 9.75 10.25H14.25C15.3546 10.25 16.25 9.35457 16.25 8.25V3.75C16.25 2.64543 15.3546 1.75 14.25 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 1.75H9.75C8.64543 1.75 7.75 2.64543 7.75 3.75V8.25C7.75 9.35457 8.64543 10.25 9.75 10.25H14.25C15.3546 10.25 16.25 9.35457 16.25 8.25V3.75C16.25 2.64543 15.3546 1.75 14.25 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 13.25H6.75C5.645 13.25 4.75 12.355 4.75 11.25V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 16.25H3.75C2.645 16.25 1.75 15.355 1.75 14.25V8.75"
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

export default AnimationRepeat;
