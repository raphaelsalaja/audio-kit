import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClockRotateClockwise2({
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
          d="M9 4C8.5859 4 8.25 4.3359 8.25 4.75V9C8.25 9.2461 8.37111 9.4766 8.57321 9.6167L11.8232 11.8667C11.9531 11.957 12.1025 12 12.249 12C12.4873 12 12.7207 11.8872 12.8662 11.6768C13.1025 11.3365 13.0176 10.8692 12.6767 10.6333L9.74991 8.60687V4.75C9.74991 4.3359 9.4141 4 9 4Z"
          fill={fill}
        />
        <path
          d="M16.2676 8.45312C15.8721 8.43113 15.5088 8.76763 15.4971 9.18213C15.4004 12.7246 12.5459 15.5 9 15.5C5.416 15.5 2.5 12.584 2.5 9C2.5 5.416 5.416 2.5 9 2.5C11.1631 2.5 13.129 3.57317 14.3273 5.30127L12.8701 5.1001C12.4551 5.0459 12.081 5.33012 12.0244 5.74072C11.9678 6.15092 12.2549 6.52933 12.665 6.58643L15.6093 6.9931C15.6445 6.9975 15.6786 6.99988 15.7128 6.99988C16.081 6.99988 16.4023 6.72841 16.455 6.35291L16.8632 3.40808C16.9198 2.99788 16.6337 2.61898 16.2226 2.56238C15.8173 2.50528 15.4345 2.79193 15.3769 3.20203L15.2617 4.03479C13.769 2.14929 11.488 0.999878 9 0.999878C4.5889 0.999878 1 4.58878 1 8.99988C1 13.411 4.5889 16.9999 9 16.9999C13.3643 16.9999 16.877 13.5839 16.9971 9.22302C17.0078 8.80892 16.6817 8.46432 16.2676 8.45312Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ClockRotateClockwise2;
