import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VrController({
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
          d="M9 17C7.6211 17 6.5 15.8784 6.5 14.5V8.1147C5.5537 7.3579 5 6.2216 5 5C5 2.7944 6.7939 1 9 1C11.2061 1 13 2.7944 13 5C13 6.2217 12.4463 7.3579 11.5 8.1147V14.5C11.5 15.8784 10.3789 17 9 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 6.5C9.82843 6.5 10.5 5.82843 10.5 5C10.5 4.17157 9.82843 3.5 9 3.5C8.17157 3.5 7.5 4.17157 7.5 5C7.5 5.82843 8.17157 6.5 9 6.5Z"
          fill={fill}
        />
        <path
          d="M9 13C5.1465 13 1 12.061 1 10C1 9.3047 1.48339 8.33301 3.78709 7.65191C4.18749 7.53621 4.6025 7.7618 4.7187 8.1587C4.8369 8.5557 4.6093 8.97271 4.2128 9.09031C2.87 9.48731 2.51939 9.9131 2.49989 10.0058C2.58969 10.4091 4.72449 11.4999 8.99989 11.4999C13.2753 11.4999 15.4101 10.4091 15.4999 9.9945C15.4804 9.913 15.1298 9.48721 13.787 9.09021C13.3905 8.97251 13.163 8.5555 13.2811 8.1586C13.3983 7.7607 13.8114 7.53561 14.2127 7.65181C16.5164 8.33301 16.9998 9.30461 16.9998 9.99991C16.9998 12.0609 12.8535 13 9 13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default VrController;
