import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayerFront({
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
          d="M2.665 7.96101L8.55199 4.891C8.84199 4.74 9.18798 4.74004 9.47798 4.89204L15.337 7.96101C15.871 8.24201 15.871 9.00703 15.337 9.28803L9.467 12.379C9.175 12.533 8.82699 12.533 8.53499 12.379L2.665 9.28803C2.131 9.00703 2.131 8.24201 2.665 7.96101Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M15.736 11.875C15.736 12.136 15.602 12.398 15.335 12.539L9.465 15.63C9.173 15.784 8.82499 15.784 8.53299 15.63L2.66299 12.539C2.39599 12.398 2.26199 12.137 2.26199 11.875"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.25V1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 3L9 0.75L11.25 3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.99999 6.2052L2.665 7.961C2.131 8.242 2.131 9.00702 2.665 9.28802L8.53499 12.379C8.82699 12.533 9.175 12.533 9.467 12.379L15.337 9.28802C15.871 9.00702 15.871 8.242 15.337 7.961L12 6.20343"
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

export default LayerFront;
