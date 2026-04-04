import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudDroplet({
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
          d="M8.99998 10.5C9.20719 10.5 9.40311 10.5944 9.53225 10.7564C9.69814 10.9646 9.87813 11.1553 10.075 11.3627C10.0803 11.3683 10.0856 11.3738 10.0909 11.3794C10.2767 11.5752 10.4822 11.7917 10.6658 12.0248C11.0615 12.5272 11.3821 13.1394 11.3821 13.9911C11.3821 15.311 10.3256 16.3986 8.99998 16.3986C7.67436 16.3986 6.61786 15.311 6.61786 13.9911C6.61786 13.1394 6.93849 12.5272 7.33414 12.0248C7.51778 11.7917 7.72331 11.5752 7.90907 11.3794C7.91439 11.3738 7.91969 11.3683 7.92498 11.3627C8.12183 11.1553 8.30182 10.9646 8.46771 10.7564C8.59685 10.5944 8.79277 10.5 8.99998 10.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CloudDroplet;
