import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartDonutCircle({
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
          d="M16.4463 4.69365L15.6939 3.69482C17.9043 8.62737 12.0824 12.6728 8.7669 10.57L9.40253 11.1797L10.6247 11.7996L13.231 12L15.3048 10.9202L16.374 9.59392L16.9999 7.58881L16.8035 6.38575L16.4463 4.69365Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M7 12.5L9 13V11L8 10L6.5 10.5L6 11.5L7 12.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 21.5V16.5L17 16L19 15L20.5 14L21.3126 13.2726L22 12V17L21.2382 18.5066L20 19.5L16 21L12 21.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M7 7.16888C4.01099 8.03341 2 9.64927 2 11.5C2 14.2614 6.47715 16.5 12 16.5C17.5228 16.5 22 14.2614 22 11.5C22 9.64927 19.989 8.03341 17 7.16888"
          stroke={fill}
        />
        <path
          d="M16 10.0093C17.2275 10.3755 18 10.9077 18 11.5C18 12.6046 15.3137 13.5 12 13.5C8.68629 13.5 6 12.6046 6 11.5C6 10.9077 6.7725 10.3755 7.99999 10.0093"
          stroke={fill}
        />
        <path
          d="M22 11.5V16.5C22 19.2614 17.5228 21.5 12 21.5C6.47715 21.5 2 19.2614 2 16.5V11.5"
          stroke={fill}
        />
        <path d="M9 13L5 15V20" stroke={fill} strokeLinecap="round" />
        <path d="M15 13V11" stroke={fill} strokeLinecap="round" />
        <path d="M15 13L19 15V20" stroke={fill} strokeLinecap="round" />
        <path d="M9 13V11" stroke={fill} strokeLinecap="round" />
        <path
          d="M12 12C14.7614 12 17 9.7614 17 7C17 4.23857 14.7614 2 12 2C9.23857 2 7 4.23857 7 7C7 9.7614 9.23857 12 12 12Z"
          stroke={fill}
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
}

export default ChartDonutCircle;
