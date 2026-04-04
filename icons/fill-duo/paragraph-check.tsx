import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ParagraphCheck({
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
          d="M2.00101 13.75C2.00101 13.3358 2.3368 13 2.75101 13H6.75101C7.16522 13 7.50101 13.3358 7.50101 13.75C7.50101 14.1642 7.16522 14.5 6.75101 14.5H2.75101C2.3368 14.5 2.00101 14.1642 2.00101 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.00101 10.25C2.00101 9.83579 2.3368 9.5 2.75101 9.5H6.75101C7.16522 9.5 7.50101 9.83579 7.50101 10.25C7.50101 10.6642 7.16522 11 6.75101 11H2.75101C2.3368 11 2.00101 10.6642 2.00101 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.00101 6.75C2.00101 6.33579 2.3368 6 2.75101 6H15.251C15.6652 6 16.001 6.33579 16.001 6.75C16.001 7.16421 15.6652 7.5 15.251 7.5H2.75101C2.3368 7.5 2.00101 7.16421 2.00101 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.00101 3.25C2.00101 2.83579 2.3368 2.5 2.75101 2.5H15.251C15.6652 2.5 16.001 2.83579 16.001 3.25C16.001 3.66421 15.6652 4 15.251 4H2.75101C2.3368 4 2.00101 3.66421 2.00101 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.4642 9.50949C15.7926 9.762 15.854 10.2329 15.6015 10.5612L12.2045 14.9782C12.0729 15.1493 11.874 15.2554 11.6586 15.2694C11.4433 15.2834 11.2323 15.2039 11.0797 15.0513L9.47067 13.4423C9.17778 13.1494 9.17778 12.6746 9.47067 12.3817C9.76356 12.0888 10.2384 12.0888 10.5313 12.3817L11.5363 13.3866L14.4125 9.64677C14.665 9.31843 15.1359 9.25697 15.4642 9.50949Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ParagraphCheck;
