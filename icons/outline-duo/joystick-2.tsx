import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Joystick2({
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
          d="M14.25 12.75H3.75C2.92157 12.75 2.25 13.4216 2.25 14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25C15.75 13.4216 15.0784 12.75 14.25 12.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 6.75C10.2426 6.75 11.25 5.74264 11.25 4.5C11.25 3.25736 10.2426 2.25 9 2.25C7.75736 2.25 6.75 3.25736 6.75 4.5C6.75 5.74264 7.75736 6.75 9 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.75V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 12.75H3.75C2.92157 12.75 2.25 13.4216 2.25 14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25C15.75 13.4216 15.0784 12.75 14.25 12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 12.75V11.25"
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

export default Joystick2;
