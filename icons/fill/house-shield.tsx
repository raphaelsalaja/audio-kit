import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseShield({
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
          d="M17.5605 11.3175L14.8105 10.0675C14.6132 9.9777 14.3867 9.9777 14.1894 10.0675L11.4395 11.3175C11.1719 11.4386 11 11.7062 11 12.0001V14.9405C11 16.9903 13.9604 17.878 14.2979 17.9727C14.3638 17.9913 14.4322 18 14.5 18C14.5678 18 14.6362 17.9912 14.7021 17.9727C15.0395 17.878 18 16.9903 18 14.9405V12.0001C18 11.7062 17.8281 11.4386 17.5605 11.3175ZM16.5 14.9405C16.5 15.5489 15.3726 16.1759 14.5 16.4659V11.5743L16.5 12.4835V14.9405Z"
          fill={secondaryfill}
        />
        <path
          d="M7.94127 1.3628C8.56694 0.88743 9.4333 0.886554 10.0591 1.36311L15.3088 5.35286C15.7448 5.68397 16 6.20006 16 6.74598V8.96047L15.4312 8.70193C14.8395 8.43286 14.1597 8.43316 13.568 8.70223L10.8211 9.9509C10.0151 10.3163 9.5 11.1204 9.5 12.0001V14.9405C9.5 15.7654 9.76919 16.4475 10.1481 17H4.75C3.23079 17 2 15.7692 2 14.25V6.74598C2 6.19865 2.2559 5.68344 2.69155 5.35258L7.94127 1.3628Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseShield;
