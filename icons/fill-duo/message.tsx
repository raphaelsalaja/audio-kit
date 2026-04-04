import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Message({
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
          d="M3.75 1.5C2.23054 1.5 1 2.73203 1 4.25V11.25C1 12.768 2.23054 14 3.75 14H5V16.25C5 16.5383 5.16526 16.8011 5.42511 16.926C5.68496 17.0509 5.99339 17.0158 6.21852 16.8357L9.76309 14H14.25C15.7695 14 17 12.768 17 11.25V4.25C17 2.73203 15.7695 1.5 14.25 1.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Message;
