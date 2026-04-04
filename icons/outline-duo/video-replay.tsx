import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VideoReplay({
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
          d="M14.5 9C11.743 9 9.5 6.757 9.5 4C9.5 3.914 9.496 3.835 9.5 3.75H3.75C2.645 3.75 1.75 4.645 1.75 5.75V13.25C1.75 14.355 2.645 15.25 3.75 15.25H14.25C15.355 15.25 16.25 14.355 16.25 13.25C16.25 12.8049 16.3126 8.67755 16.0294 8.76825C15.5384 8.92555 15.0249 9 14.5 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.157 8.87899L8.17 6.857C7.672 6.52 7 6.877 7 7.478V11.522C7 12.123 7.672 12.48 8.17 12.143L11.157 10.121C11.596 9.824 11.596 9.17599 11.157 8.87899Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.75 3.25H17.25V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.5 5.887C15.999 6.418 15.288 6.75 14.5 6.75C12.981 6.75 11.75 5.519 11.75 4C11.75 2.481 12.981 1.25 14.5 1.25C15.666 1.25 16.662 1.976 17.063 3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 16.25H5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.7626 3.75H3.75C2.645 3.75 1.75 4.645 1.75 5.75V13.25C1.75 14.355 2.645 15.25 3.75 15.25H14.25C15.355 15.25 16.25 14.355 16.25 13.25V9.47411"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default VideoReplay;
