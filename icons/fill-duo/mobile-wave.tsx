import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MobileWave({
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
          d="M5.75 1C4.23119 1 3 2.23119 3 3.75V14.25C3 15.7688 4.23119 17 5.75 17H12.25C13.7688 17 15 15.7688 15 14.25V3.75C15 2.23119 13.7688 1 12.25 1H5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.75 1V1.75C11.75 2.44036 11.1904 3 10.5 3H7.5C6.80964 3 6.25 2.44036 6.25 1.75V1H11.75Z"
          fill={fill}
        />
        <path
          d="M7.625 6C7.28021 6 7 6.28021 7 6.625V8.25C7 9.21621 6.21621 10 5.25 10H1C0.585786 10 0.25 9.66421 0.25 9.25C0.25 8.83579 0.585786 8.5 1 8.5H5.25C5.38779 8.5 5.5 8.38779 5.5 8.25V6.625C5.5 5.45179 6.45179 4.5 7.625 4.5C8.79821 4.5 9.75 5.45179 9.75 6.625V11.375C9.75 11.7198 10.0302 12 10.375 12C10.7198 12 11 11.7198 11 11.375V9.75C11 8.78379 11.7838 8 12.75 8H17C17.4142 8 17.75 8.33579 17.75 8.75C17.75 9.16421 17.4142 9.5 17 9.5H12.75C12.6122 9.5 12.5 9.61221 12.5 9.75V11.375C12.5 12.5482 11.5482 13.5 10.375 13.5C9.20179 13.5 8.25 12.5482 8.25 11.375V6.625C8.25 6.28021 7.96979 6 7.625 6Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MobileWave;
