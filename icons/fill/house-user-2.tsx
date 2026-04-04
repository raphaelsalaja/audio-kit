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
          d="M9 11C10.2431 11 11.25 9.99267 11.25 8.75C11.25 7.50733 10.2431 6.5 9 6.5C7.75688 6.5 6.75 7.50733 6.75 8.75C6.75 9.99267 7.75688 11 9 11Z"
          fill={secondaryfill}
        />
        <path
          d="M4.28677 16.1572C4.57899 13.8135 6.57692 12 9 12C11.4231 12 13.421 13.8135 13.7132 16.1572H4.28677Z"
          fill={secondaryfill}
        />
        <path
          d="M8.84873 2.55718C8.8487 2.5572 8.84876 2.55716 8.84873 2.55718L3.59881 6.54712C3.53669 6.59427 3.5 6.66748 3.5 6.746V14.25C3.5 14.9408 4.05921 15.5 4.75 15.5H13.25C13.9408 15.5 14.5 14.9408 14.5 14.25V6.746C14.5 6.66807 14.4633 6.5943 14.4016 6.5474L9.15119 2.55712C9.06309 2.48999 8.93892 2.48871 8.84873 2.55718ZM10.0591 1.36312C9.4333 0.886569 8.56694 0.887445 7.94127 1.36281L2.69155 5.3526C2.2559 5.68346 2 6.19867 2 6.746V14.25C2 15.7692 3.23079 17 4.75 17H13.25C14.7692 17 16 15.7692 16 14.25V6.746C16 6.20008 15.7448 5.68398 15.3088 5.35287C15.3087 5.35278 15.3089 5.35297 15.3088 5.35287L10.0591 1.36312C10.0593 1.36322 10.059 1.36302 10.0591 1.36312Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HouseUser2;
