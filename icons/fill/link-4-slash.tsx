import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Link4Slash({
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
          d="M9.00104 2.5C7.34415 2.5 6.00104 3.84311 6.00104 5.5V7.25C6.00104 7.66421 5.66525 8 5.25104 8C4.83682 8 4.50104 7.66421 4.50104 7.25V5.5C4.50104 3.01469 6.51572 1 9.00104 1C11.389 1 13.3419 2.85955 13.4918 5.20996C13.5182 5.62333 13.2044 5.97981 12.7911 6.00618C12.3777 6.03255 12.0212 5.71882 11.9948 5.30544C11.895 3.73965 10.5925 2.5 9.00104 2.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.7511 10C13.1653 10 13.5011 10.3358 13.5011 10.75V12.5C13.5011 14.9853 11.4864 17 9.00106 17C6.61314 17 4.6602 15.1406 4.51028 12.79C4.48391 12.3767 4.79764 12.0202 5.21101 11.9938C5.62439 11.9675 5.98087 12.2812 6.00723 12.6946C6.10711 14.2604 7.40959 15.5 9.00106 15.5C10.6579 15.5 12.0011 14.1569 12.0011 12.5V10.75C12.0011 10.3358 12.3368 10 12.7511 10Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.5314 1.46967C16.8243 1.76256 16.8243 2.23744 16.5314 2.53033L2.53137 16.5303C2.23847 16.8232 1.7636 16.8232 1.47071 16.5303C1.17781 16.2374 1.17781 15.7626 1.47071 15.4697L15.4707 1.46967C15.7636 1.17678 16.2385 1.17678 16.5314 1.46967Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Link4Slash;
