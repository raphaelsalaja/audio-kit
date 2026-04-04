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
          d="M16.0345 7.2133L16.857 6.5598L14.928 3.559C14.6029 3.054 14.0838 2.7061 13.4921 2.5988L11.6909 2.2715C11.5955 3.6814 10.4338 4.7998 9.00001 4.7998C7.56621 4.7998 6.40451 3.6825 6.30911 2.2715L4.50791 2.5988C3.91731 2.7061 3.39711 3.054 3.07201 3.559L1.14301 6.5598L1.96551 7.2133"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7521 6.75C13.4931 8.6592 13.4188 10.75 13.7521 12.75C11.4188 12.75 10.3557 14.75 10.3557 16.25H9.00101H7.64631C7.64631 14.75 6.58321 12.75 4.24991 12.75C4.58321 10.75 4.50891 8.6592 4.24991 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.86601 10.967C8.95101 11.011 9.05001 11.011 9.13501 10.967C9.58401 10.737 11.001 9.903 11.001 8.546C11.003 7.95 10.514 7.465 9.90801 7.461C9.54301 7.466 9.20401 7.646 9.00101 7.945C8.79801 7.647 8.45901 7.466 8.09401 7.461C7.48801 7.465 6.99901 7.95 7.00101 8.546C7.00101 9.903 8.41701 10.737 8.86601 10.967Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BabyClothes;
