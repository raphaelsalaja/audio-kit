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
          d="M10.0591 1.36311C9.4333 0.886554 8.56694 0.88743 7.94127 1.3628L2.69155 5.35258C2.2559 5.68344 2 6.19865 2 6.74598V14.25C2 15.7692 3.23079 17 4.75 17H13.25C14.7692 17 16 15.7692 16 14.25V6.74598C16 6.20006 15.7448 5.68397 15.3088 5.35286L10.0591 1.36311ZM9 9C9.82843 9 10.5 8.32843 10.5 7.5C10.5 6.67157 9.82843 6 9 6C8.17157 6 7.5 6.67157 7.5 7.5C7.5 8.32843 8.17157 9 9 9ZM6.89898 14H11.1011C11.5078 14 11.8917 13.8014 12.1285 13.4684C12.3609 13.1407 12.4215 12.7208 12.2911 12.3458C11.8023 10.943 10.4801 10.0001 9.00009 10.0001C7.52009 10.0001 6.19788 10.943 5.70958 12.3453C5.57868 12.7207 5.63928 13.1407 5.87168 13.4683C6.10848 13.8013 6.49228 14 6.89898 14Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HouseUser;
