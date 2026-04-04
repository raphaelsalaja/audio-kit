import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bag({
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
          d="M19 7L8 1.5L5 3V3.5L15.5 9L19 7Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M17.5 21.1496V8.01184L15.9691 8.6677L14 23L17.5 21.1496Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M18.9998 7.24994L15.7605 8.86961" stroke={fill} />
        <path d="M14 23L16 9L5 3.5" stroke={fill} />
        <path
          d="M3.09798 16.7896L4.92799 3.52209C4.97306 3.19533 5.17637 2.91182 5.47139 2.7643L7.32918 1.83541C7.75147 1.62426 8.24853 1.62426 8.67082 1.83541L18.5407 6.77034C18.829 6.9145 19.0301 7.18879 19.081 7.5071L20.884 18.7999C20.953 19.232 20.733 19.6588 20.341 19.8533L14.6693 22.6679C14.2478 22.877 13.7526 22.8763 13.3317 22.6659L3.64139 17.8207C3.25799 17.629 3.03941 17.2143 3.09798 16.7896Z"
          stroke={fill}
        />
        <path
          d="M8.12663 7.62679L7.70329 10.9191C7.57811 11.8926 7.99839 12.856 8.79708 13.4265C9.78707 14.1336 11.1727 13.5195 11.3136 12.3111L11.6267 9.62672"
          stroke={fill}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Bag;
