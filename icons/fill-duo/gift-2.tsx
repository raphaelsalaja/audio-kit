import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gift2({
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
          d="M9.75 1H8.25V7.5H2V9H8.25V17H9.75V9H16V7.5H9.75V1Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M16 9H9.75V17H13.25C14.7693 17 16 15.7687 16 14.25V9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.75 1V7.5H16V3.75C16 2.23128 14.7693 1 13.25 1H9.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.75 1C3.23069 1 2 2.23128 2 3.75V7.5H8.25V1H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.25 17V9H2V14.25C2 15.7687 3.23069 17 4.75 17H8.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.25 4C5.87007 4 4.75 5.11851 4.75 6.5C4.75 7.86143 5.83777 8.96746 7.19005 8.9993L5.22968 10.9597C4.93679 11.2526 4.93679 11.7274 5.22968 12.0203C5.52257 12.3132 5.99745 12.3132 6.29034 12.0203L9 9.31067L11.7097 12.0203C12.0026 12.3132 12.4774 12.3132 12.7703 12.0203C13.0632 11.7274 13.0632 11.2526 12.7703 10.9597L10.81 8.99929C12.1622 8.96746 13.25 7.86143 13.25 6.5C13.25 5.11851 12.1299 4 10.75 4C10.0689 4 9.45106 4.27251 9 4.71464C8.54894 4.27251 7.93113 4 7.25 4ZM8.25 6.5C8.25 5.94749 7.80207 5.5 7.25 5.5C6.69793 5.5 6.25 5.94749 6.25 6.5C6.25 7.05251 6.69793 7.5 7.25 7.5H8.25V6.5ZM9.75 7.5H10.75C11.3021 7.5 11.75 7.05251 11.75 6.5C11.75 5.94749 11.3021 5.5 10.75 5.5C10.1979 5.5 9.75 5.94749 9.75 6.5V7.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Gift2;
