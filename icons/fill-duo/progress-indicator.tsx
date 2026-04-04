import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ProgressIndicator({
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
          d="M15.2501 10H2.75012C1.78362 10 1.00012 10.7835 1.00012 11.75V14.25C1.00012 15.2165 1.78362 16 2.75012 16H15.2501C16.2166 16 17.0001 15.2165 17.0001 14.25V11.75C17.0001 10.7835 16.2166 10 15.2501 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.86825 7.35449C8.10655 7.76069 8.52935 8.00342 9.00005 8.00342C9.47075 8.00342 9.89366 7.76069 10.1319 7.35449C10.1329 7.35399 10.1329 7.35353 10.1329 7.35303L12.1036 3.97559C12.3429 3.56499 12.3438 3.07372 12.1065 2.66162C11.8702 2.25002 11.4453 2.00391 10.9697 2.00391H7.03026C6.55466 2.00391 6.12984 2.25002 5.89354 2.66162C5.65624 3.07372 5.65725 3.56487 5.89745 3.97607L7.86825 7.35449Z"
          fill={fill}
        />
        <path
          d="M9.00012 10H2.75012C1.78532 10 1.00012 10.7852 1.00012 11.75V14.25C1.00012 15.2148 1.78532 16 2.75012 16H9.00012V10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ProgressIndicator;
