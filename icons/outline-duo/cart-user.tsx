import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CartUser({
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
          d="M10.1201 5.11719C10.0245 5.29389 9.93601 5.47602 9.86133 5.66602L9.79297 5.85156C9.50045 6.69074 9.63963 7.6192 10.1494 8.33789C10.6658 9.06382 11.5036 9.49981 12.3984 9.5H12.6689L12.6289 9.59277C12.4912 9.99827 12.1099 10.2715 11.6816 10.2715H5.00098L4.12891 5.11719H10.1201Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 1.75L3.101 2.088C3.494 2.186 3.789 2.51199 3.848 2.91299L4.9273 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.4661 4.75H4.1181"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 13.25H4.75C3.9216 13.25 3.25 12.5784 3.25 11.75C3.25 10.9216 3.9216 10.25 4.75 10.25H13.0496"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 17C4.552 17 5 16.552 5 16C5 15.448 4.552 15 4 15C3.448 15 3 15.448 3 16C3 16.552 3.448 17 4 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14 17C14.552 17 15 16.552 15 16C15 15.448 14.552 15 14 15C13.448 15 13 15.448 13 16C13 16.552 13.448 17 14 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.5 3C15.3284 3 16 2.32843 16 1.5C16 0.671573 15.3284 0 14.5 0C13.6716 0 13 0.671573 13 1.5C13 2.32843 13.6716 3 14.5 3Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.6011 8.00001H12.399C11.9923 8.00001 11.6085 7.80132 11.3717 7.46832C11.1393 7.14072 11.0787 6.72072 11.2096 6.34532C11.6979 4.94302 13.0201 4.00012 14.5001 4.00012C15.9801 4.00012 17.3023 4.943 17.7911 6.3458C17.9215 6.7208 17.8609 7.14071 17.6285 7.46841C17.3917 7.80141 17.0078 8.00001 16.6011 8.00001Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CartUser;
