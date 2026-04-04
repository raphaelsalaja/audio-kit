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
          d="M9.00101 2.5C7.34412 2.5 6.00101 3.84311 6.00101 5.5V7.25C6.00101 7.66421 5.66522 8 5.25101 8C4.83679 8 4.50101 7.66421 4.50101 7.25V5.5C4.50101 3.01469 6.51569 1 9.00101 1C11.3889 1 13.3419 2.85955 13.4918 5.20996C13.5181 5.62333 13.2044 5.97981 12.791 6.00618C12.3777 6.03255 12.0212 5.71882 11.9948 5.30544C11.8949 3.73965 10.5925 2.5 9.00101 2.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.751 10C13.1652 10 13.501 10.3358 13.501 10.75V12.5C13.501 14.9853 11.4863 17 9.001 17C6.61308 17 4.66014 15.1406 4.51021 12.79C4.48385 12.3767 4.79758 12.0202 5.21095 11.9938C5.62433 11.9675 5.98081 12.2812 6.00717 12.6946C6.10705 14.2604 7.40953 15.5 9.001 15.5C10.6579 15.5 12.001 14.1569 12.001 12.5V10.75C12.001 10.3358 12.3368 10 12.751 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16.5313 1.46967C16.8242 1.76256 16.8242 2.23744 16.5313 2.53033L2.53134 16.5303C2.23844 16.8232 1.76357 16.8232 1.47068 16.5303C1.17778 16.2374 1.17778 15.7626 1.47068 15.4697L15.4707 1.46967C15.7636 1.17678 16.2384 1.17678 16.5313 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Link4Slash;
