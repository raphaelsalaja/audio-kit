import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseUser({
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
          d="M10.0591 1.36312C9.4333 0.886569 8.56694 0.887445 7.94127 1.36281L2.69155 5.3526C2.2559 5.68346 2 6.19867 2 6.746V14.25C2 15.7692 3.23079 17 4.75 17H13.25C14.7692 17 16 15.7692 16 14.25V6.746C16 6.20008 15.7448 5.68398 15.3088 5.35287L10.0591 1.36312Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 9C9.82843 9 10.5 8.32843 10.5 7.5C10.5 6.67157 9.82843 6 9 6C8.17157 6 7.5 6.67157 7.5 7.5C7.5 8.32843 8.17157 9 9 9Z"
          fill={fill}
        />
        <path
          d="M11.1011 14H6.89899C6.49229 14 6.10849 13.8013 5.87169 13.4683C5.63929 13.1407 5.57868 12.7207 5.70958 12.3453C6.19788 10.943 7.52009 10.0001 9.00009 10.0001C10.4801 10.0001 11.8023 10.943 12.2911 12.3458C12.4215 12.7208 12.3609 13.1407 12.1285 13.4684C11.8917 13.8014 11.5078 14 11.1011 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseUser;
