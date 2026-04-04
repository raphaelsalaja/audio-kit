import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Books2({
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
          d="M5 7.00313V5.50313H10.5V7.00313H5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.1038 5.16639C13.8153 4.24467 12.8344 3.72988 11.9118 4.01788L11.3085 4.2055C10.6869 4.39965 10.2505 4.90906 10.1205 5.50313H10.5V7.00313H10.3494L12.6944 14.5117C12.9829 15.4334 13.963 15.9478 14.8863 15.66L15.4882 15.4725C16.4128 15.1843 16.9245 14.2015 16.6379 13.2803L14.1038 5.16639Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.32671 4H3.75C2.7835 4 2 4.7835 2 5.75V14.6251C2 14.8644 2.04901 15.1138 2.1853 15.3412C2.32401 15.5727 2.51929 15.7248 2.7175 15.8203C3.07004 15.9902 3.48047 16 3.75 16H4C4.26954 16 4.67997 15.9902 5.03251 15.8203C5.23072 15.7248 5.42599 15.5727 5.5647 15.3412C5.70099 15.1138 5.75 14.8644 5.75 14.6251V7.00313H5V5.50313H5.76091C5.77736 5.3089 5.80972 5.12492 5.83932 4.95666C5.93921 4.38888 6.00762 4 5.32671 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.2705 9.9526L10.8233 8.52081L14.025 7.52084C14.0338 7.51776 14.0426 7.51483 14.0515 7.51204L14.7667 7.28881L15.2139 8.72098L11.2705 9.9526Z"
          fill={fill}
        />
        <path d="M2 9.5V8H5.75V9.5H2Z" fill={fill} />
        <path
          d="M0.25 15.25C0.25 14.8358 0.585786 14.5 1 14.5H17C17.4142 14.5 17.75 14.8358 17.75 15.25C17.75 15.6642 17.4142 16 17 16H1C0.585786 16 0.25 15.6642 0.25 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.75 2C5.78393 2 5 2.78334 5 3.75V14.25C5 15.2167 5.78393 16 6.75 16H8.75C9.71607 16 10.5 15.2167 10.5 14.25V3.75C10.5 2.78334 9.71607 2 8.75 2H6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Books2;
