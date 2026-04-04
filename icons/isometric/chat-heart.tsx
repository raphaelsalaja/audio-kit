import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatHeart({
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
          d="M7.56382 8.72283C6.81206 9.17303 6.81206 10.5239 7.56382 11.7401L9.97306 15.7083C10.2628 16.1854 10.8871 16.333 11.3598 16.0361L13.4362 14.7317C14.1879 14.2815 14.1879 12.9307 13.4362 11.7145C12.6844 10.4983 11.4656 9.87741 10.7138 10.3276C10.6341 10.3754 10.5 10.5 10.5 10.5C10.4372 10.3692 10.3659 10.2387 10.2862 10.1097C9.53442 8.89357 8.31558 8.27263 7.56382 8.72283Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M17.5 22.5V10L20.5 8.5V21L17.5 22.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M17.5 10L20.5 8.5" stroke={fill} />
        <path d="M3.5 3L17.5 10L17.5 22.5" stroke={fill} />
        <path
          d="M7.56382 8.72283C6.81206 9.17303 6.81206 10.5239 7.56382 11.7401L9.97306 15.7083C10.2628 16.1854 10.8871 16.333 11.3598 16.0361L13.4362 14.7317C14.1879 14.2815 14.1879 12.9307 13.4362 11.7145C12.6844 10.4983 11.4656 9.87741 10.7138 10.3276C10.6341 10.3754 10.5 10.5 10.5 10.5C10.4372 10.3692 10.3659 10.2387 10.2862 10.1097C9.53442 8.89357 8.31558 8.27263 7.56382 8.72283Z"
          stroke={fill}
        />
        <path
          d="M19.9472 21.2764L18.1708 22.1646C17.7485 22.3758 17.2515 22.3758 16.8292 22.1646L7 17.25L5.18045 18.9396C4.5406 19.5337 3.5 19.08 3.5 18.2068V3.61803C3.5 3.23926 3.714 2.893 4.05279 2.72361L5.82918 1.83541C6.25147 1.62426 6.74853 1.62426 7.17082 1.83541L19.9472 8.22361C20.286 8.393 20.5 8.73926 20.5 9.11803V20.382C20.5 20.7608 20.286 21.107 19.9472 21.2764Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default ChatHeart;
