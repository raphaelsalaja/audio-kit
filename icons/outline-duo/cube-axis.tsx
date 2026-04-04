import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CubeAxis({
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
          d="M8.157 4.149L4.587 6.22C4.069 6.521 3.75 7.074 3.75 7.673V11.828C3.75 12.427 4.069 12.981 4.587 13.281L8.157 15.352C8.678 15.654 9.322 15.654 9.843 15.352L13.413 13.281C13.931 12.98 14.25 12.427 14.25 11.828V7.673C14.25 7.074 13.931 6.52 13.413 6.22L9.843 4.149C9.322 3.847 8.678 3.847 8.157 4.149Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 3.922V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.99 12.692L1.765 13.991"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.01 12.692L16.235 13.991"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.157 4.149L4.587 6.22C4.069 6.521 3.75 7.074 3.75 7.673V11.828C3.75 12.427 4.069 12.981 4.587 13.281L8.157 15.352C8.678 15.654 9.322 15.654 9.843 15.352L13.413 13.281C13.931 12.98 14.25 12.427 14.25 11.828V7.673C14.25 7.074 13.931 6.52 13.413 6.22L9.843 4.149C9.322 3.847 8.678 3.847 8.157 4.149Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.026 6.83501L9 9.75001L3.974 6.83501"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 15.578V9.75"
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

export default CubeAxis;
