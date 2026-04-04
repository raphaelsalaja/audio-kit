import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Photo({
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
        <path
          d="M17.4999 21.6038L12.0073 11.2814L17.4999 16V21.6038Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M17.5 22.5V10L20.5 8.5V21L17.5 22.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M17.5 10L20.2892 8.60541" stroke={fill} />
        <path d="M3.5 3L17.5 10L17.5 22.5" stroke={fill} />
        <path
          d="M9 9.89423C9 10.882 8.32843 11.2823 7.5 10.7885C6.67157 10.2946 6 9.09351 6 8.10577C6 7.11803 6.67157 6.71767 7.5 7.21154C8.32843 7.70541 9 8.90649 9 9.89423Z"
          stroke={fill}
        />
        <path d="M11.8636 11.2143L17.5 22" stroke={fill} />
        <path
          d="M5.5 16.5L11.6652 11.2833C11.8568 11.1212 12.1388 11.1262 12.3245 11.295L17.5 16"
          stroke={fill}
        />
        <path
          d="M3.5 14.573V3.61803C3.5 3.23926 3.714 2.893 4.05279 2.72361L5.82918 1.83541C6.25147 1.62426 6.74853 1.62426 7.17082 1.83541L19.6708 8.08541C20.179 8.3395 20.5 8.85889 20.5 9.42705V20.382C20.5 20.7608 20.286 21.107 19.9472 21.2764L18.1708 22.1646C17.7485 22.3758 17.2515 22.3758 16.8292 22.1646L4.32918 15.9146C3.821 15.6605 3.5 15.1411 3.5 14.573Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Photo;
