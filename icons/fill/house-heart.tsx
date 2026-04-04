import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseHeart({
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
          d="M13.731 17.933C13.901 18.022 14.099 18.022 14.269 17.933C15.166 17.461 18 15.752 18 12.972C18.004 11.751 17.026 10.757 15.813 10.75C15.083 10.759 14.405 11.13 14 11.741C13.595 11.13 12.916 10.76 12.187 10.75C10.974 10.757 9.99601 11.752 10 12.972C10 15.752 12.834 17.461 13.731 17.933Z"
          fill={secondaryfill}
        />
        <path
          d="M7.94127 1.3628C8.56694 0.88743 9.4333 0.886554 10.0591 1.36311L15.3088 5.35286C15.7448 5.68397 16 6.20006 16 6.74598V9.2562C15.7553 9.24401 15.5071 9.25664 15.264 9.29497C14.8154 9.36571 14.3875 9.51789 13.9995 9.74033C13.6107 9.51764 13.182 9.3656 12.7334 9.29493C12.4543 9.25097 12.1594 9.23839 11.8646 9.26512C10.0922 9.42581 8.69723 10.8315 8.51915 12.5855C8.4887 12.8855 8.49894 13.1677 8.51573 13.3901C8.62974 14.9003 9.33841 16.1075 10.1168 17H4.75C3.23079 17 2 15.7692 2 14.25V6.74598C2 6.19865 2.2559 5.68344 2.69155 5.35258L7.94127 1.3628Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseHeart;
