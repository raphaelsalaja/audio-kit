import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CrosshairsSlash({
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
          d="M14.6569 3.34316C13.2092 1.89543 11.2092 1 9 1C4.58169 1 1 4.58169 1 9C1 11.2092 1.89543 13.2092 3.34316 14.6569L14.6569 3.34316Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.0206 5.16139L5.16138 16.0206C6.30088 16.645 7.60897 17 8.99998 17C13.4183 17 17 13.4183 17 9C17 7.60899 16.645 6.3009 16.0206 5.16139Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.87868 6.87868C8.05016 5.70719 9.94943 5.70679 11.1213 6.87868L6.87868 11.1213C5.70679 9.94943 5.7072 8.05016 6.87868 6.87868Z"
          fill={fill}
        />
        <path
          d="M9 0.25C9.41421 0.25 9.75 0.585786 9.75 1V2.5C9.75 2.91421 9.41421 3.25 9 3.25C8.58579 3.25 8.25 2.91421 8.25 2.5V1C8.25 0.585786 8.58579 0.25 9 0.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.75 9C14.75 8.58579 15.0858 8.25 15.5 8.25H17C17.4142 8.25 17.75 8.58579 17.75 9C17.75 9.41421 17.4142 9.75 17 9.75H15.5C15.0858 9.75 14.75 9.41421 14.75 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 14.75C9.41421 14.75 9.75 15.0858 9.75 15.5V17C9.75 17.4142 9.41421 17.75 9 17.75C8.58579 17.75 8.25 17.4142 8.25 17V15.5C8.25 15.0858 8.58579 14.75 9 14.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0.25 9C0.25 8.58579 0.585786 8.25 1 8.25H2.5C2.91421 8.25 3.25 8.58579 3.25 9C3.25 9.41421 2.91421 9.75 2.5 9.75H1C0.585786 9.75 0.25 9.41421 0.25 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CrosshairsSlash;
