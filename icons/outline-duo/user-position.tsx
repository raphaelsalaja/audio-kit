import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserPosition({
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
          d="M12.324 9.499L11.472 7.086C11.19 6.286 10.436 5.751 9.58699 5.752C9.20599 5.752 8.79399 5.752 8.41299 5.752C7.56499 5.752 6.81099 6.287 6.52899 7.086L5.67799 9.499C5.58199 9.771 5.73499 10.067 6.01199 10.146L7.25099 10.5L7.44599 13.809C7.47699 14.338 7.91499 14.75 8.44399 14.75H9.55799C10.087 14.75 10.525 14.337 10.556 13.809L10.751 10.5L11.99 10.146C12.267 10.067 12.42 9.771 12.324 9.499Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.00101 3.75C9.82943 3.75 10.501 3.07843 10.501 2.25C10.501 1.42157 9.82943 0.75 9.00101 0.75C8.17258 0.75 7.50101 1.42157 7.50101 2.25C7.50101 3.07843 8.17258 3.75 9.00101 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.324 9.499L11.472 7.086C11.19 6.286 10.436 5.751 9.58699 5.752C9.20599 5.752 8.79399 5.752 8.41299 5.752C7.56499 5.752 6.81099 6.287 6.52899 7.086L5.67799 9.499C5.58199 9.771 5.73499 10.067 6.01199 10.146L7.25099 10.5L7.44599 13.809C7.47699 14.338 7.91499 14.75 8.44399 14.75H9.55799C10.087 14.75 10.525 14.337 10.556 13.809L10.751 10.5L11.99 10.146C12.267 10.067 12.42 9.771 12.324 9.499Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.088 13.348C14.997 13.708 16.25 14.314 16.25 15C16.25 16.105 13.004 17 9 17C4.996 17 1.75 16.105 1.75 15C1.75 14.314 3.004 13.708 4.914 13.348"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default UserPosition;
