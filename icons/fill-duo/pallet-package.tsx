import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PalletPackage({
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
          d="M7.25 1C6.28379 1 5.5 1.78379 5.5 2.75V6.25C5.5 7.21621 6.28379 8 7.25 8H10.75C11.7162 8 12.5 7.21621 12.5 6.25V2.75C12.5 1.78379 11.7162 1 10.75 1H9.75V3.75C9.75 4.16421 9.41421 4.5 9 4.5C8.58579 4.5 8.25 4.16421 8.25 3.75V1H7.25Z"
          fill={fill}
        />
        <path
          d="M5.51774 2.5C5.50605 2.58165 5.5 2.66512 5.5 2.75V6.25C5.5 7.21621 6.28379 8 7.25 8H10.75C11.7162 8 12.5 7.21621 12.5 6.25V2.75C12.5 2.66512 12.494 2.58165 12.4823 2.5H13.7405C14.5245 2.5 15.2128 3.02124 15.4255 3.77568L17.472 11.0468C17.5356 11.2728 17.4897 11.5156 17.3479 11.7028C17.2061 11.89 16.9848 12 16.75 12H1.25001C1.01511 12 0.793783 11.8899 0.652012 11.7027C0.510241 11.5154 0.464405 11.2725 0.528168 11.0464L2.57893 3.77541C2.7916 3.02098 3.4799 2.5 4.26357 2.5H5.51774Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.5 13.5V14.75C11.5 15.4403 10.9403 16 10.25 16H7.75C7.05969 16 6.5 15.4403 6.5 14.75V13.5H11.5Z"
          fill={fill}
        />
        <path
          d="M0.5 13.5V14.75C0.5 15.4403 1.05969 16 1.75 16H3.75C4.44031 16 5 15.4403 5 14.75V13.5H2V13.5H0.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.75 13.5V14.75C12.75 15.4403 13.3097 16 14 16H16.25C16.9403 16 17.5 15.4403 17.5 14.75V13.5H16H12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PalletPackage;
