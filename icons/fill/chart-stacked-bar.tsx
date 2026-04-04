import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartStackedBar({
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
        <path d="M1.75 11H4.75V15H1.75V11Z" fill={fill} />
        <path d="M7.5 9H10.5V15.5H7.5V9Z" fill={fill} />
        <path d="M13.25 12H16.25V15H13.25V12Z" fill={fill} />
        <path
          d="M6.75 3.75C6.75 2.78393 7.53334 2 8.5 2H9.5C10.4667 2 11.25 2.78393 11.25 3.75V14.25C11.25 15.2161 10.4667 16 9.5 16H8.5C7.53334 16 6.75 15.2161 6.75 14.25V3.75ZM8.5 3.5C8.36206 3.5 8.25 3.61207 8.25 3.75V14.25C8.25 14.3879 8.36206 14.5 8.5 14.5H9.5C9.63794 14.5 9.75 14.3879 9.75 14.25V3.75C9.75 3.61207 9.63794 3.5 9.5 3.5H8.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 7.75C1 6.78393 1.78334 6 2.75 6H3.75C4.71666 6 5.5 6.78393 5.5 7.75V14.25C5.5 15.2161 4.71666 16 3.75 16H2.75C1.78334 16 1 15.2161 1 14.25V7.75ZM2.75 7.5C2.61206 7.5 2.5 7.61207 2.5 7.75V14.25C2.5 14.3879 2.61206 14.5 2.75 14.5H3.75C3.88794 14.5 4 14.3879 4 14.25V7.75C4 7.61207 3.88794 7.5 3.75 7.5H2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.5 9.75C12.5 8.78393 13.2833 8 14.25 8H15.25C16.2167 8 17 8.78393 17 9.75V14.25C17 15.2161 16.2167 16 15.25 16H14.25C13.2833 16 12.5 15.2161 12.5 14.25V9.75ZM14.25 9.5C14.1121 9.5 14 9.61207 14 9.75V14.25C14 14.3879 14.1121 14.5 14.25 14.5H15.25C15.3879 14.5 15.5 14.3879 15.5 14.25V9.75C15.5 9.61207 15.3879 9.5 15.25 9.5H14.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartStackedBar;
