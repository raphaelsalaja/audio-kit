import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartLock({
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
          d="M8.00001 14.75C8.00001 13.5933 8.61191 12.5828 9.52461 12.0068C9.65271 10.0539 11.2654 8.5 13.25 8.5C14.3745 8.5 15.368 9.0095 16.0513 9.7971C16.4771 8.8376 16.749 7.779 16.749 6.6118C16.7588 4.0845 14.708 2.0156 12.1631 2C10.9678 2.0151 9.83991 2.4902 9.00001 3.3057C8.15921 2.4903 7.02832 2.0152 5.82232 2C3.29202 2.0156 1.24121 4.0845 1.25101 6.6089C1.25101 11.687 6.20231 14.8193 8.00001 15.7888V14.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.5 13.0254V12.25C15.5 11.0093 14.4907 10 13.25 10C12.0093 10 11 11.0093 11 12.25V13.0254C10.1541 13.148 9.5 13.8706 9.5 14.75V16.25C9.5 17.2148 10.2852 18 11.25 18H15.25C16.2148 18 17 17.2148 17 16.25V14.75C17 13.8706 16.3459 13.1479 15.5 13.0254ZM13.25 11.5C13.6636 11.5 14 11.8364 14 12.25V13H12.5V12.25C12.5 11.8364 12.8364 11.5 13.25 11.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HeartLock;
