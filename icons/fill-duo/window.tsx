import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Window({
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
          d="M14.2501 16H3.75012C2.23352 16 1.00012 14.7666 1.00012 13.25V4.75C1.00012 3.2334 2.23352 2 3.75012 2H14.2501C15.7667 2 17.0001 3.2334 17.0001 4.75V13.25C17.0001 14.7666 15.7667 16 14.2501 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.00012 6C4.55241 6 5.00012 5.55228 5.00012 5C5.00012 4.44772 4.55241 4 4.00012 4C3.44784 4 3.00012 4.44772 3.00012 5C3.00012 5.55228 3.44784 6 4.00012 6Z"
          fill={fill}
        />
        <path
          d="M7.00012 6C7.55241 6 8.00012 5.55228 8.00012 5C8.00012 4.44772 7.55241 4 7.00012 4C6.44784 4 6.00012 4.44772 6.00012 5C6.00012 5.55228 6.44784 6 7.00012 6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Window;
