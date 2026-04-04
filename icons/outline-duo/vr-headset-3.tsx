import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VrHeadset3({
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
          d="M3.75 5.75H14.25C15.355 5.75 16.25 6.645 16.25 7.75V12.25C16.25 13.355 15.355 14.25 14.25 14.25H12.25C11.62 14.25 11.028 13.954 10.65 13.45L10.2 12.85C9.6 12.05 8.4 12.05 7.8 12.85L7.35 13.45C6.972 13.954 6.38 14.25 5.75 14.25H3.75C2.645 14.25 1.75 13.355 1.75 12.25V7.75C1.75 6.645 2.645 5.75 3.75 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 5.75H14.25C15.355 5.75 16.25 6.645 16.25 7.75V12.25C16.25 13.355 15.355 14.25 14.25 14.25H12.25C11.62 14.25 11.028 13.954 10.65 13.45L10.2 12.85C9.6 12.05 8.4 12.05 7.8 12.85L7.35 13.45C6.972 13.954 6.38 14.25 5.75 14.25H3.75C2.645 14.25 1.75 13.355 1.75 12.25V7.75C1.75 6.645 2.645 5.75 3.75 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5 10.75C5.91421 10.75 6.25 10.4142 6.25 10C6.25 9.58579 5.91421 9.25 5.5 9.25C5.08579 9.25 4.75 9.58579 4.75 10C4.75 10.4142 5.08579 10.75 5.5 10.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5 10.75C12.9142 10.75 13.25 10.4142 13.25 10C13.25 9.58579 12.9142 9.25 12.5 9.25C12.0858 9.25 11.75 9.58579 11.75 10C11.75 10.4142 12.0858 10.75 12.5 10.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.979 6.745L14.087 3.696C13.722 3.108 13.079 2.75 12.388 2.75H9.001H5.61399C4.92199 2.75 4.27899 3.108 3.91499 3.696L2.02299 6.745"
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

export default VrHeadset3;
