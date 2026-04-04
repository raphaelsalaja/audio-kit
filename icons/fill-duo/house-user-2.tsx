import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseUser2({
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
          d="M10.0591 1.61314C9.4333 1.13658 8.56694 1.13746 7.94127 1.61283L2.69155 5.60261C2.2559 5.93347 2 6.44868 2 6.99601V14.25C2 15.7692 3.23079 17 4.75 17H13.25C14.7692 17 16 15.7692 16 14.25V6.99601C16 6.45009 15.7448 5.934 15.3088 5.60289L10.0591 1.61314Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 10.75C10.3812 10.75 11.5 9.63075 11.5 8.25C11.5 6.86925 10.3812 5.75 9 5.75C7.61875 5.75 6.5 6.86925 6.5 8.25C6.5 9.63075 7.61875 10.75 9 10.75Z"
          fill={fill}
        />
        <path
          d="M13.719 16.9602V16.25C13.719 16.219 13.7171 16.188 13.7132 16.1572C13.421 13.8135 11.4231 12 9 12C6.57693 12 4.579 13.8135 4.28678 16.1572C4.28294 16.188 4.28101 16.219 4.28101 16.25V16.9602C4.43342 16.9864 4.59011 17 4.75 17H13.25C13.4099 17 13.5666 16.9864 13.719 16.9602Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseUser2;
