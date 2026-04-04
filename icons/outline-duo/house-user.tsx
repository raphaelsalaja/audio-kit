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
          d="M3.145 6.2L8.395 2.21001C8.753 1.93801 9.248 1.93801 9.605 2.21001L14.855 6.2C15.104 6.389 15.25 6.68401 15.25 6.99601V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.99601C2.75 6.68301 2.896 6.389 3.145 6.2Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.145 6.2L8.395 2.21001C8.753 1.93801 9.248 1.93801 9.605 2.21001L14.855 6.2C15.104 6.389 15.25 6.68401 15.25 6.99601V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.99601C2.75 6.68301 2.896 6.389 3.145 6.2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9C9.82843 9 10.5 8.32843 10.5 7.5C10.5 6.67157 9.82843 6 9 6C8.17157 6 7.5 6.67157 7.5 7.5C7.5 8.32843 8.17157 9 9 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.1011 14H6.89898C6.49228 14 6.10848 13.8013 5.87168 13.4683C5.63928 13.1407 5.57868 12.7207 5.70958 12.3453C6.19788 10.943 7.52009 10.0001 9.00009 10.0001C10.4801 10.0001 11.8023 10.943 12.2911 12.3458C12.4215 12.7208 12.3609 13.1407 12.1285 13.4684C11.8917 13.8014 11.5078 14 11.1011 14Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default HouseUser;
