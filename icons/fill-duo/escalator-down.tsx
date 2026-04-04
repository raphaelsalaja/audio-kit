import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EscalatorDown({
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
          d="M5.5 5.00101C4.3973 5.00101 3.5 4.10371 3.5 3.00101C3.5 1.89831 4.3973 1.00101 5.5 1.00101C6.6027 1.00101 7.5 1.89831 7.5 3.00101C7.5 4.10371 6.6027 5.00101 5.5 5.00101Z"
          fill={fill}
        />
        <path
          d="M16.2501 15.5108H14.5509L16.7706 13.2911C17.0636 12.9981 17.0636 12.5235 16.7706 12.2306C16.4776 11.9377 16.003 11.9376 15.7101 12.2306L13.4904 14.4503V12.7511C13.4904 12.337 13.1545 12.0011 12.7404 12.0011C12.3263 12.0011 11.9904 12.337 11.9904 12.7511V16.2609C11.9904 16.675 12.3263 17.0109 12.7404 17.0109H16.2502C16.6643 17.0109 17.0002 16.675 17.0002 16.2609C17.0002 15.8468 16.6642 15.5108 16.2501 15.5108Z"
          fill={fill}
        />
        <path
          d="M17.001 7.50101C17.001 6.12031 15.8817 5.00101 14.501 5.00101H13.5386C12.8424 5.00101 12.1722 5.26521 11.6633 5.74011L4.9546 12.001H3.5C2.1193 12.001 1 13.1203 1 14.501C1 15.8817 2.1193 17.001 3.5 17.001H4.4621C5.1588 17.001 5.8295 16.7366 6.3389 16.2613L13.0464 10.001H14.501C15.8817 10.001 17.001 8.88171 17.001 7.50101Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.5 12.001H4.9546L9.1807 8.05721L6.8716 6.44441C6.457 6.15391 5.9693 6.00011 5.4614 6.00011C4.104 6.00011 3 7.10411 3 8.46151V12.0513C3.1616 12.0186 3.3287 12.001 3.5 12.001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EscalatorDown;
