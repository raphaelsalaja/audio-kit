import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gauge6({
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
          d="M16.25 9C16.25 13.004 13.004 16.25 9 16.25C9.828 16.25 10.5 15.578 10.5 14.75C10.5 13.922 9 7.75 9 7.75C9 7.75 7.5 13.922 7.5 14.75C7.5 15.578 8.172 16.25 9 16.25C4.996 16.25 1.75 13.004 1.75 9C1.75 4.996 4.996 1.75 9 1.75C13.004 1.75 16.25 4.996 16.25 9Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 5.5C9.414 5.5 9.75 5.164 9.75 4.75C9.75 4.336 9.414 4 9 4C8.586 4 8.25 4.336 8.25 4.75C8.25 5.164 8.586 5.5 9 5.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.005 6.745C12.419 6.745 12.755 6.409 12.755 5.995C12.755 5.581 12.419 5.245 12.005 5.245C11.591 5.245 11.255 5.581 11.255 5.995C11.255 6.409 11.591 6.745 12.005 6.745Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.25 9.75C13.664 9.75 14 9.414 14 9C14 8.586 13.664 8.25 13.25 8.25C12.836 8.25 12.5 8.586 12.5 9C12.5 9.414 12.836 9.75 13.25 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.995 6.745C6.409 6.745 6.745 6.409 6.745 5.995C6.745 5.581 6.409 5.245 5.995 5.245C5.581 5.245 5.245 5.581 5.245 5.995C5.245 6.409 5.581 6.745 5.995 6.745Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.75 9.75C5.164 9.75 5.5 9.414 5.5 9C5.5 8.586 5.164 8.25 4.75 8.25C4.336 8.25 4 8.586 4 9C4 9.414 4.336 9.75 4.75 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.5 14.75C7.5 13.922 9 7.75 9 7.75C9 7.75 10.5 13.922 10.5 14.75C10.5 15.578 9.828 16.25 9 16.25C8.172 16.25 7.5 15.578 7.5 14.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.4991 14.6667C15.1703 13.3393 16.25 11.3 16.25 9C16.25 4.9961 13.004 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 11.2998 2.82968 13.3394 4.50089 14.6667"
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

export default Gauge6;
