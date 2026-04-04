import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagUser({
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
          d="M14.5026 12.5C15.3311 12.5 16.0026 11.8284 16.0026 11C16.0026 10.1716 15.3311 9.5 14.5026 9.5C13.6742 9.5 13.0026 10.1716 13.0026 11C13.0026 11.8284 13.6742 12.5 14.5026 12.5Z"
          fill={secondaryfill}
        />
        <path
          d="M16.6037 17.5H12.4016C11.9949 17.5 11.6111 17.3013 11.3743 16.9683C11.1419 16.6407 11.0814 16.2207 11.2123 15.8453C11.7006 14.443 13.0227 13.5001 14.5027 13.5001C15.9827 13.5001 17.3049 14.443 17.7937 15.8458C17.9241 16.2208 17.8635 16.6407 17.6311 16.9684C17.3943 17.3014 17.0104 17.5 16.6037 17.5Z"
          fill={secondaryfill}
        />
        <path
          d="M9.79593 15.3514C10.1985 14.1958 10.9981 13.2573 12.0104 12.6706C11.6897 12.1931 11.5026 11.6184 11.5026 11C11.5026 9.34317 12.8458 8 14.5026 8C14.8718 8 15.2254 8.06669 15.5521 8.18868L15.406 6.512C15.281 5.08 14.104 4 12.667 4H12V3C12 1.346 10.654 0 9.00001 0C7.34601 0 6.00001 1.346 6.00001 3V4H5.33301C3.89601 4 2.71801 5.08 2.59401 6.512L1.94201 14.012C1.87501 14.778 2.13501 15.542 2.65401 16.109C3.17301 16.676 3.91201 17.001 4.68101 17.001H9.74991C9.59752 16.4675 9.60791 15.891 9.79593 15.3514ZM9 1.5C8.173 1.5 7.5 2.173 7.5 3V4H10.5V3C10.5 2.173 9.827 1.5 9 1.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BagUser;
