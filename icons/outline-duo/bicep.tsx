import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bicep({
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
          d="M5.22401 5.671C4.47101 8.777 6.30601 9.095 7.04801 10.868C8.09401 9.629 11.678 8.221 13.986 9.405C16.294 10.589 16.541 13.836 14.663 15.069C13.556 15.795 11.86 16.243 10.341 16.244C8.61001 16.288 7.36101 16.108 6.81801 15.836C5.92001 15.951 4.02301 15.938 3.24801 15.149C2.71601 14.608 1.63001 11.503 2.28101 8.191C2.97201 4.695 4.12501 1.751 5.37001 1.751C5.98001 1.751 6.97101 1.771 7.43401 2.146C7.89701 2.521 7.68301 3.342 7.41901 3.794C7.74201 4.053 7.81101 4.518 7.57801 4.86C7.20201 5.288 6.71301 5.601 6.16701 5.763C5.85401 5.848 5.48001 5.747 5.22401 5.671Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.22401 5.671C4.47101 8.777 6.30601 9.095 7.04801 10.868C8.09401 9.629 11.678 8.221 13.986 9.405C16.294 10.589 16.541 13.836 14.663 15.069C13.556 15.795 11.86 16.243 10.341 16.244C8.61001 16.288 7.36101 16.108 6.81801 15.836C5.92001 15.951 4.02301 15.938 3.24801 15.149C2.71601 14.608 1.63001 11.503 2.28101 8.191C2.97201 4.695 4.12501 1.751 5.37001 1.751C5.98001 1.751 6.97101 1.771 7.43401 2.146C7.89701 2.521 7.68301 3.342 7.41901 3.794C7.74201 4.053 7.81101 4.518 7.57801 4.86C7.20201 5.288 6.71301 5.601 6.16701 5.763C5.85401 5.848 5.48001 5.747 5.22401 5.671Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 13C10.188 13.506 12.035 13.129 13.25 12.297"
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

export default Bicep;
