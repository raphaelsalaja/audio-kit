import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Layout({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path d="M8.5 5.5V18" stroke={fill} />
        <path d="M8.5 10.5L17.5 15" stroke={fill} />
        <path
          d="M17.5 22.5V10L20.5 8.5V21L17.5 22.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M17.5 9.99999L20.2942 8.60291" stroke={fill} />
        <path d="M3.5 3L17.5 10L17.5 22.5" stroke={fill} />
        <path
          d="M3.5 14.573V3.61803C3.5 3.23926 3.714 2.893 4.05279 2.72361L5.82918 1.83541C6.25147 1.62426 6.74853 1.62426 7.17082 1.83541L19.6708 8.08541C20.179 8.3395 20.5 8.85889 20.5 9.42705V20.382C20.5 20.7608 20.286 21.107 19.9472 21.2764L18.1708 22.1646C17.7485 22.3758 17.2515 22.3758 16.8292 22.1646L4.32918 15.9146C3.821 15.6605 3.5 15.1411 3.5 14.573Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Layout;
