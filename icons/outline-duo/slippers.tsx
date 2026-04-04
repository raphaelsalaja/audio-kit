import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Slippers({
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
          d="M12.25 16.25C11.145 16.249 10.251 15.353 10.251 14.249L10.25 14.25C10.2414 13.5108 10.317 12.9991 10.3984 12.4478C10.4877 11.843 10.584 11.1905 10.584 10.138C10.584 9.94448 10.5811 9.76817 10.5759 9.60625C11.1581 9.32484 11.9442 9.20395 13.0414 9.32934C13.9927 9.43806 14.8425 10.0827 15.2496 10.4882C15.1934 10.6511 15.1379 10.8199 15.084 10.996C14.8126 11.8827 14.6988 12.5259 14.5971 13.1C14.4898 13.7063 14.3962 14.2356 14.145 14.893C13.869 15.704 13.107 16.25 12.25 16.25ZM16.1757 7.61164C16.223 7.32002 16.25 7.01307 16.25 6.68C16.25 4.98 14.529 3.414 12.717 3.262C11.278 3.142 10.25 3.946 10.25 6.338C10.25 6.41909 10.2508 6.49634 10.2524 6.5702C11.437 6.15588 13.9329 5.89412 16.1757 7.61164Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.75 14.75C6.855 14.749 7.749 13.853 7.749 12.749L7.75 12.75C7.75858 12.0108 7.68303 11.4991 7.60163 10.9478C7.51233 10.343 7.416 9.69054 7.416 8.638C7.416 8.42961 7.41932 8.24117 7.4253 8.06916C6.91353 7.86802 5.96851 7.63952 4.96736 7.83205C3.97618 8.02266 3.16427 8.58158 2.74139 8.96212C2.80066 9.1331 2.85924 9.31046 2.916 9.496C3.1874 10.3827 3.30125 11.0259 3.40286 11.6C3.51017 12.2063 3.60384 12.7356 3.855 13.393C4.131 14.204 4.893 14.75 5.75 14.75ZM1.81528 6.05434C2.92442 5.21719 5.22235 4.18435 7.74555 5.15051C7.74845 5.05277 7.75 4.94898 7.75 4.838C7.75 2.446 6.722 1.642 5.283 1.762C3.471 1.914 1.75 3.48 1.75 5.18C1.75 5.49133 1.77358 5.77984 1.81528 6.05434Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.74599 5.065C5.72599 4.41 3.51299 4.788 1.82599 6.077"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 8.99C3.979 7.765 5.83 7.41 7.425 8.094"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.749 12.749C7.749 13.853 6.855 14.749 5.75 14.75C4.893 14.75 4.131 14.204 3.855 13.393C3.366 12.113 3.474 11.319 2.916 9.496C2.406 7.829 1.75 6.822 1.75 5.18C1.75 3.48 3.471 1.914 5.283 1.762C6.722 1.642 7.75 2.446 7.75 4.838C7.75 6.465 7.416 6.548 7.416 8.638C7.416 10.65 7.768 11.2 7.75 12.75L7.749 12.749Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.254 6.565C12.274 5.91 14.487 6.288 16.174 7.577"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 10.49C14.021 9.265 12.17 8.91 10.575 9.594"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.251 14.249C10.251 15.353 11.145 16.249 12.25 16.25C13.107 16.25 13.869 15.704 14.145 14.893C14.634 13.613 14.526 12.819 15.084 10.996C15.594 9.329 16.25 8.322 16.25 6.68C16.25 4.98 14.529 3.414 12.717 3.262C11.278 3.142 10.25 3.946 10.25 6.338C10.25 7.965 10.584 8.048 10.584 10.138C10.584 12.15 10.232 12.7 10.25 14.25L10.251 14.249Z"
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

export default Slippers;
