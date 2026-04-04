import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartDonut({
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
          d="M9 11V8L6.5 8.5L6 9.5L7 10.5L9 11Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 19.5V14.5L17 14L19 13L20.5 12L22 10V15L21.2517 16.4911L20 17.5L16 19L12 19.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 14.5C17.5228 14.5 22 12.2614 22 9.5C22 6.73857 17.5228 4.5 12 4.5C6.47715 4.5 2 6.73857 2 9.5C2 12.2614 6.47715 14.5 12 14.5Z"
          stroke={fill}
          strokeLinecap="square"
        />
        <path
          d="M12 11.5C15.3137 11.5 18 10.6046 18 9.5C18 8.39543 15.3137 7.5 12 7.5C8.68629 7.5 6 8.39543 6 9.5C6 10.6046 8.68629 11.5 12 11.5Z"
          stroke={fill}
          strokeLinecap="square"
        />
        <path
          d="M22 9.5V14.5C22 17.2614 17.5228 19.5 12 19.5C6.47715 19.5 2 17.2614 2 14.5V9.5"
          stroke={fill}
        />
        <path d="M9 11L5 13V18" stroke={fill} strokeLinecap="round" />
        <path d="M19 6L15 8V11" stroke={fill} strokeLinecap="round" />
        <path d="M15 11L19 13V18" stroke={fill} strokeLinecap="round" />
        <path d="M5 6L9 8V11" stroke={fill} strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default ChartDonut;
