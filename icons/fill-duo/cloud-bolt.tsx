import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudBolt({
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
          d="M14.157 6.326C12.633 5.724 10.7083 6 9.12499 7.3958C9.37499 6.125 11.4118 4.5058 13.523 4.608C12.61 3.047 10.922 2 9.02899 2C6.14399 2 3.79799 4.355 3.79799 7.25C3.79799 7.375 3.80299 7.5 3.81399 7.627C2.16899 8.045 0.96499 9.561 1.00199 11.334C1.02299 12.334 1.43099 13.265 2.14999 13.958C2.84999 14.632 3.76299 15 4.71499 15H12.516C14.989 15 17 12.982 17 10.499C16.997 8.64 15.869 7.003 14.157 6.326Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.62054 9.09793C9.94323 9.28129 10.0833 9.67311 9.94993 10.0195L9.18742 12H10.5C10.7871 12 11.049 12.1639 11.1746 12.4222C11.3001 12.6804 11.2671 12.9876 11.0897 13.2134L8.33975 16.7134C8.11044 17.0052 7.70216 17.0854 7.37947 16.9021C7.05678 16.7187 6.91674 16.3269 7.05009 15.9805L7.81259 14H6.50001C6.21289 14 5.95097 13.8361 5.82546 13.5779C5.69995 13.3196 5.73288 13.0124 5.91027 12.7866L8.66027 9.28664C8.88957 8.9948 9.29785 8.91456 9.62054 9.09793Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CloudBolt;
