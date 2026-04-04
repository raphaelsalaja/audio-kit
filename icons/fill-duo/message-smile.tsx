import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageSmile({
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
        <path
          d="M5.81867 8.62171C6.11156 8.32882 6.58643 8.32881 6.87933 8.62171C8.05043 9.79281 9.95056 9.79281 11.1217 8.62171C11.4146 8.32881 11.8894 8.32882 12.1823 8.62171C12.4752 8.9146 12.4752 9.38948 12.1823 9.68237C10.4254 11.4393 7.57556 11.4393 5.81867 9.68237C5.52578 9.38948 5.52577 8.9146 5.81867 8.62171Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MessageSmile;
