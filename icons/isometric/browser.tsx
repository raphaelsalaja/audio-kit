import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Browser({
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
          d="M17.5 22.5V10L20.5 8.5V21L17.5 22.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M17.5 10L20.2864 8.60681" stroke={fill} />
        <path d="M3.5 3L17.5 10L17.5 22.5" stroke={fill} />
        <path
          d="M7.24927 8.08139C7.24927 8.66391 6.85642 8.90003 6.37183 8.60877C5.88723 8.3175 5.49438 7.60916 5.49438 7.02664C5.49438 6.44412 5.88723 6.20801 6.37183 6.49927C6.85642 6.79053 7.24927 7.49887 7.24927 8.08139Z"
          fill={fill}
        />
        <path
          d="M10.1228 9.51901C10.1228 10.1015 9.72996 10.3376 9.24536 10.0464C8.76077 9.75513 8.36792 9.04679 8.36792 8.46426C8.36792 7.88174 8.76077 7.64563 9.24536 7.93689C9.72996 8.22815 10.1228 8.93649 10.1228 9.51901Z"
          fill={fill}
        />
        <path
          d="M3.5 14.573V3.61803C3.5 3.23926 3.714 2.893 4.05279 2.72361L5.82918 1.83541C6.25147 1.62426 6.74853 1.62426 7.17082 1.83541L19.6708 8.08541C20.179 8.3395 20.5 8.85889 20.5 9.42705V20.382C20.5 20.7608 20.286 21.107 19.9472 21.2764L18.1708 22.1646C17.7485 22.3758 17.2515 22.3758 16.8292 22.1646L4.32918 15.9146C3.821 15.6605 3.5 15.1411 3.5 14.573Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Browser;
