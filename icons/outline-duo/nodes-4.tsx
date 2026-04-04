import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nodes4({
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
          d="M9 4.75C9.9665 4.75 10.75 3.9665 10.75 3C10.75 2.0335 9.9665 1.25 9 1.25C8.0335 1.25 7.25 2.0335 7.25 3C7.25 3.9665 8.0335 4.75 9 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.81799 9.241C3.78449 9.241 4.56799 8.4575 4.56799 7.491C4.56799 6.5245 3.78449 5.741 2.81799 5.741C1.85149 5.741 1.06799 6.5245 1.06799 7.491C1.06799 8.4575 1.85149 9.241 2.81799 9.241Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.179 16.509C6.1455 16.509 6.929 15.7255 6.929 14.759C6.929 13.7925 6.1455 13.009 5.179 13.009C4.2125 13.009 3.429 13.7925 3.429 14.759C3.429 15.7255 4.2125 16.509 5.179 16.509Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.821 16.509C13.7875 16.509 14.571 15.7255 14.571 14.759C14.571 13.7925 13.7875 13.009 12.821 13.009C11.8545 13.009 11.071 13.7925 11.071 14.759C11.071 15.7255 11.8545 16.509 12.821 16.509Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.182 9.241C16.1485 9.241 16.932 8.4575 16.932 7.491C16.932 6.5245 16.1485 5.741 15.182 5.741C14.2155 5.741 13.432 6.5245 13.432 7.491C13.432 8.4575 14.2155 9.241 15.182 9.241Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 11.25C9.9665 11.25 10.75 10.4665 10.75 9.5C10.75 8.5335 9.9665 7.75 9 7.75C8.0335 7.75 7.25 8.5335 7.25 9.5C7.25 10.4665 8.0335 11.25 9 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 4.75C9.9665 4.75 10.75 3.9665 10.75 3C10.75 2.0335 9.9665 1.25 9 1.25C8.0335 1.25 7.25 2.0335 7.25 3C7.25 3.9665 8.0335 4.75 9 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.81799 9.241C3.78449 9.241 4.56799 8.4575 4.56799 7.491C4.56799 6.5245 3.78449 5.741 2.81799 5.741C1.85149 5.741 1.06799 6.5245 1.06799 7.491C1.06799 8.4575 1.85149 9.241 2.81799 9.241Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.179 16.509C6.1455 16.509 6.929 15.7255 6.929 14.759C6.929 13.7925 6.1455 13.009 5.179 13.009C4.2125 13.009 3.429 13.7925 3.429 14.759C3.429 15.7255 4.2125 16.509 5.179 16.509Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.821 16.509C13.7875 16.509 14.571 15.7255 14.571 14.759C14.571 13.7925 13.7875 13.009 12.821 13.009C11.8545 13.009 11.071 13.7925 11.071 14.759C11.071 15.7255 11.8545 16.509 12.821 16.509Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.182 9.241C16.1485 9.241 16.932 8.4575 16.932 7.491C16.932 6.5245 16.1485 5.741 15.182 5.741C14.2155 5.741 13.432 6.5245 13.432 7.491C13.432 8.4575 14.2155 9.241 15.182 9.241Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 7.75V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.33599 8.95899L6.38499 8.64999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.971 10.916L7.384 11.725"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.029 10.916L10.616 11.725"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.664 8.95899L11.615 8.64999"
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

export default Nodes4;
