import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SatelliteDish({
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
          d="M2.97676 6.27841C1.15905 8.72544 1.36013 12.1991 3.58002 14.419C5.79116 16.6301 9.24623 16.8384 11.6916 15.0436C6.51088 13.293 3.72307 8.47071 2.97676 6.27841Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.25 9.75L10 8"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 4.75C11.907 4.75 13.25 6.093 13.25 7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 1.75C13.564 1.75 16.25 4.436 16.25 7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.419 14.419C9.97802 16.86 6.02102 16.86 3.58002 14.419C1.13902 11.978 1.13902 8.02099 3.58002 5.57999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.27242 6.4854C5.63642 5.3934 4.18292 4.97709 3.58002 5.58009C2.69772 6.46239 3.96132 9.1565 6.40242 11.5977C8.84352 14.0386 11.5377 15.3023 12.42 14.42C13.0229 13.8172 12.6066 12.3636 11.5146 10.7276"
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

export default SatelliteDish;
