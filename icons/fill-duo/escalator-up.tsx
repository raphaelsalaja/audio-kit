import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EscalatorUp({
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
          d="M16.25 12H12.74C12.326 12 11.99 12.3359 11.99 12.75C11.99 13.1641 12.326 13.5 12.74 13.5H14.439L12.22 15.7197C11.927 16.0127 11.927 16.4873 12.22 16.7802C12.366 16.9267 12.558 16.9999 12.75 16.9999C12.942 16.9999 13.134 16.9267 13.28 16.7802L15.5 14.5605V16.2597C15.5 16.6738 15.836 17.0097 16.25 17.0097C16.664 17.0097 17 16.6738 17 16.2597V12.7499C17 12.3358 16.664 12 16.25 12Z"
          fill={fill}
        />
        <path
          d="M5.5 5.00101C4.3973 5.00101 3.5 4.10371 3.5 3.00101C3.5 1.89831 4.3973 1.00101 5.5 1.00101C6.6027 1.00101 7.5 1.89831 7.5 3.00101C7.5 4.10371 6.6027 5.00101 5.5 5.00101Z"
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

export default EscalatorUp;
