import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ParagraphAdd({
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
          d="M13.001 9.75C13.001 9.33579 12.6652 9 12.251 9C11.8368 9 11.501 9.33579 11.501 9.75V12H9.25101C8.8368 12 8.50101 12.3358 8.50101 12.75C8.50101 13.1642 8.8368 13.5 9.25101 13.5H11.501V15.75C11.501 16.1642 11.8368 16.5 12.251 16.5C12.6652 16.5 13.001 16.1642 13.001 15.75V13.5H15.251C15.6652 13.5 16.001 13.1642 16.001 12.75C16.001 12.3358 15.6652 12 15.251 12H13.001V9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.00101 13.75C2.00101 13.3358 2.3368 13 2.75101 13H6.25101C6.66522 13 7.00101 13.3358 7.00101 13.75C7.00101 14.1642 6.66522 14.5 6.25101 14.5H2.75101C2.3368 14.5 2.00101 14.1642 2.00101 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.00101 10.25C2.00101 9.83579 2.3368 9.5 2.75101 9.5H6.25101C6.66522 9.5 7.00101 9.83579 7.00101 10.25C7.00101 10.6642 6.66522 11 6.25101 11H2.75101C2.3368 11 2.00101 10.6642 2.00101 10.25Z"
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
      </g>
    </svg>
  );
}

export default ParagraphAdd;
