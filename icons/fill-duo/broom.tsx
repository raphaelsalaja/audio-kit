import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Broom({
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
          d="M9.84597 7.90399C9.55297 7.61099 9.55297 7.13599 9.84597 6.84299L15.72 0.969994C16.013 0.676994 16.488 0.676994 16.781 0.969994C17.074 1.26299 17.074 1.73799 16.781 2.03099L10.907 7.90499C10.6086 8.20334 10.1462 8.20626 9.84597 7.90399Z"
          fill={fill}
        />
        <path
          d="M12.162 11.704C10.821 10.989 9.58601 10.076 8.54201 8.98201C7.71501 8.11501 7.01101 7.12301 6.42201 6.06601C5.81119 6.29794 5.2193 6.65261 4.70153 7.16675C4.67371 7.19438 4.64606 7.22257 4.61873 7.25022C3.36212 8.52152 2.7187 9.11062 1.6484 9.25694C1.24829 9.31164 0.963322 9.67333 1.00376 10.0751C1.32668 13.2838 3.14038 15.8783 6.23375 16.7584C7.09363 17.0034 8.00822 16.8063 8.69818 16.2661L8.76068 16.2162C9.83013 15.3535 11.2246 13.899 11.9524 12.2458C12.0301 12.0693 12.1011 11.8886 12.1634 11.7045L12.162 11.704Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.542 8.982C9.586 10.076 10.821 10.989 12.162 11.704C12.327 11.215 12.434 10.705 12.446 10.182C12.475 8.887 11.946 7.752 10.871 6.809C9.619 5.711 7.93 5.489 6.422 6.066C7.011 7.123 7.715 8.115 8.542 8.982Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Broom;
