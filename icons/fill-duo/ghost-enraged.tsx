import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GhostEnraged({
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
          d="M15.25 17.0007C14.0449 17.0007 13.417 16.4245 12.959 16.0041C12.5781 15.655 12.3936 15.5007 12 15.5007C11.584 15.5007 11.3838 15.6775 11.0049 16.0451C10.5889 16.4484 10.0195 17.0007 9 17.0007C7.9805 17.0007 7.4111 16.4485 6.9951 16.0451C6.6162 15.6774 6.416 15.5007 6 15.5007C5.6064 15.5007 5.4219 15.655 5.041 16.0041C4.583 16.4245 3.9551 17.0007 2.75 17.0007C2.3359 17.0007 2 16.6648 2 16.2507V8.0007C2 4.1408 5.1406 1.0007 9 1.0007C12.8594 1.0007 16 4.1408 16 8.0007V16.2507C16 16.6648 15.6641 17.0007 15.25 17.0007Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.75 9.50869C6.519 9.95269 7.46101 9.82769 8.08701 9.26469C8.32801 9.04769 8.257 8.64669 7.976 8.48469L5.52401 7.06869C5.24301 6.90669 4.86 7.0447 4.793 7.3627C4.618 8.1867 4.981 9.06469 5.75 9.50869Z"
          fill={fill}
        />
        <path
          d="M12.25 9.50869C11.481 9.95269 10.539 9.82769 9.91298 9.26469C9.67198 9.04769 9.74298 8.64669 10.024 8.48469L12.476 7.06869C12.757 6.90669 13.14 7.0447 13.207 7.3627C13.382 8.1867 13.019 9.06469 12.25 9.50869Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GhostEnraged;
