import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BabyClothes({
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
          d="M16.857 6.55981L15.4531 7.67188L14.2434 6.37393C13.9844 8.28313 13.4188 10.75 13.7521 12.75C11.4188 12.75 10.3557 14.75 10.3557 16.25H7.64628C7.64628 14.75 6.58318 12.75 4.24988 12.75C4.58318 10.75 3.99226 8.28313 3.73326 6.37393L2.54688 7.67188L1.14301 6.55981L3.07201 3.55901C3.39711 3.05401 3.91731 2.70611 4.50791 2.59881L6.30911 2.27151C6.40451 3.68251 7.56621 4.79981 9.00001 4.79981C10.4338 4.79981 11.5955 3.68141 11.6909 2.27151L13.4921 2.59881C14.0838 2.70611 14.6029 3.05401 14.928 3.55901L16.857 6.55981Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.0345 7.21332L16.857 6.55981L14.928 3.55901C14.6029 3.05401 14.0838 2.70611 13.4921 2.59881L11.6909 2.27151C11.5955 3.68141 10.4338 4.79981 9.00001 4.79981C7.56621 4.79981 6.40451 3.68251 6.30911 2.27151L4.50791 2.59881C3.91731 2.70611 3.39711 3.05401 3.07201 3.55901L1.14301 6.55981L1.96551 7.21332"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7521 6.75C13.4931 8.6592 13.4188 10.75 13.7521 12.75C11.4188 12.75 10.3557 14.75 10.3557 16.25H9.00098H7.64628C7.64628 14.75 6.58318 12.75 4.24988 12.75C4.58318 10.75 4.50888 8.6592 4.24988 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.86598 10.967C8.95098 11.011 9.04998 11.011 9.13498 10.967C9.58398 10.737 11.001 9.903 11.001 8.546C11.003 7.95 10.514 7.465 9.90798 7.461C9.54298 7.466 9.20398 7.646 9.00098 7.945C8.79798 7.647 8.45898 7.466 8.09398 7.461C7.48798 7.465 6.99898 7.95 7.00098 8.546C7.00098 9.903 8.41698 10.737 8.86598 10.967Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BabyClothes;
