import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Joystick({
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
          d="M8.22978 6.67866C8.52494 6.53328 8.85106 6.4765 9.17007 6.50796C9.50379 6.54088 9.79333 6.68807 9.94291 6.76411C11.2889 7.44835 12.647 8.11375 14.0088 8.76593C14.0811 8.80052 14.236 8.87473 14.3722 8.97799C14.7803 9.28752 14.9894 9.74909 14.9994 10.2144V12.6198L9.01874 15.6513L2.99887 12.1748V10.2144C3.01075 9.65494 3.30835 9.101 3.89178 8.81411L8.22978 6.67866Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.8922 13.1934C8.92558 13.2098 8.9623 13.2183 8.99901 13.2183C9.03572 13.2183 9.07212 13.21 9.10551 13.1935L13.4474 11.0566L15 10.3345V13.25C15 13.7461 14.7686 14.2548 14.3066 14.5693C14.1859 14.6515 14.053 14.7121 13.9224 14.7764L9.76848 16.8208C9.28365 17.0595 8.71462 17.0597 8.22979 16.8209L3.89179 14.6859C3.29949 14.3935 2.99799 13.816 2.99799 13.25V11.5006V10.3345L4.5542 11.0584L8.8922 13.1934Z"
          fill={fill}
        />
        <path
          d="M9 5.74339C9.41421 5.74339 9.75 6.07918 9.75 6.49339V9.73256C9.75 10.1468 9.41421 10.4826 9 10.4826C8.58579 10.4826 8.25 10.1468 8.25 9.73256L8.25 6.49339C8.25 6.07918 8.58579 5.74339 9 5.74339Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6 4C6 2.34327 7.3427 1 9 1C10.6573 1 12 2.34327 12 4C12 5.65673 10.6573 7 9 7C7.3427 7 6 5.65673 6 4Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Joystick;
