import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserFeather({
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
          d="M17.916 10.4047C17.7764 10.1352 17.499 9.97653 17.1846 10.0028C10.8301 10.559 10.0127 17.099 10.0049 17.1649C9.95805 17.5765 10.2539 17.9481 10.6651 17.995C10.6944 17.9984 10.7227 17.9999 10.751 17.9999C11.127 17.9999 11.4512 17.7177 11.4951 17.3349C11.4995 17.2962 11.5237 17.1036 11.5877 16.8112C11.675 16.389 12.0312 15.0155 12.8281 14.1093C12.8281 14.1093 12.5 15.3905 12.7034 16.4999H13.5C16.5498 16.4999 16.9189 14.5145 17.1885 13.0648C17.3213 12.3519 17.4463 11.6791 17.8223 11.2342C18.0186 11.0023 18.0556 10.6747 17.916 10.4047Z"
          fill={fill}
        />
        <path
          d="M12.6508 10.0291C11.589 9.37662 10.3392 9 8.99999 9C6.14167 9 3.69058 10.7157 2.60517 13.1674C2.05162 14.4186 2.74425 15.8317 4.01259 16.2313C5.19038 16.6025 6.71851 16.9402 8.51486 16.9929C8.52965 16.868 8.77088 14.9794 9.91931 13.0117C10.5323 11.9614 11.4144 10.876 12.6508 10.0291Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default UserFeather;
