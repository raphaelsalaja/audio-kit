import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CopiesPlus2({
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
          d="M8 14.75C8 13.5093 9.0098 12.5 10.25 12.5H10.5V12.25C10.5 11.0093 11.5098 10 12.75 10C13.5418 10 14.2397 10.4114 14.6408 11.0317C14.868 11.383 15.25 10.7176 15.25 10.7176V7.75H2.75V15.25H7.97031C7.97031 15.25 8.03081 15.1816 8.02341 15.1406C8.00121 15.0177 8 14.8793 8 14.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 1.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 4.75H13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.29419 15.25H3.75C3.198 15.25 2.75 14.802 2.75 14.25V8.75C2.75 8.198 3.198 7.75 3.75 7.75H14.25C14.802 7.75 15.25 8.198 15.25 8.75V10.6138"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 12.25V17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 14.75H10.25"
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

export default CopiesPlus2;
