import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sliders({
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
          d="M16.2501 6H13.2501C12.836 6 12.5001 5.6641 12.5001 5.25C12.5001 4.8359 12.836 4.5 13.2501 4.5H16.2501C16.6642 4.5 17.0001 4.8359 17.0001 5.25C17.0001 5.6641 16.6642 6 16.2501 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.75009 6H1.75009C1.33599 6 1.00009 5.6641 1.00009 5.25C1.00009 4.8359 1.33599 4.5 1.75009 4.5H8.75009C9.16419 4.5 9.50009 4.8359 9.50009 5.25C9.50009 5.6641 9.16419 6 8.75009 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.75009 13.5H1.75009C1.33599 13.5 1.00009 13.1641 1.00009 12.75C1.00009 12.3359 1.33599 12 1.75009 12H4.75009C5.16419 12 5.50009 12.3359 5.50009 12.75C5.50009 13.1641 5.16419 13.5 4.75009 13.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.2501 13.5H9.25009C8.83599 13.5 8.50009 13.1641 8.50009 12.75C8.50009 12.3359 8.83599 12 9.25009 12H16.2501C16.6642 12 17.0001 12.3359 17.0001 12.75C17.0001 13.1641 16.6642 13.5 16.2501 13.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.0001 8.25C12.6569 8.25 14.0001 6.90685 14.0001 5.25C14.0001 3.59315 12.6569 2.25 11.0001 2.25C9.34324 2.25 8.00009 3.59315 8.00009 5.25C8.00009 6.90685 9.34324 8.25 11.0001 8.25Z"
          fill={fill}
        />
        <path
          d="M7.00009 15.75C8.65695 15.75 10.0001 14.4069 10.0001 12.75C10.0001 11.0931 8.65695 9.75 7.00009 9.75C5.34324 9.75 4.00009 11.0931 4.00009 12.75C4.00009 14.4069 5.34324 15.75 7.00009 15.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sliders;
