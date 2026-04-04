import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CartHeart({
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
          d="M13.781 6.44701C13.919 6.51801 14.08 6.51801 14.218 6.44701C14.947 6.07301 17.249 4.717 17.249 2.513C17.253 1.545 16.458 0.756 15.472 0.75C14.879 0.757 14.328 1.051 13.999 1.536C13.67 1.052 13.118 0.758 12.526 0.75C11.541 0.756 10.746 1.544 10.749 2.513C10.749 4.718 13.053 6.07301 13.781 6.44701Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.89353 4.75C9.27115 5.59116 9.84442 6.26491 10.3486 6.76465C11.0961 7.46493 11.969 8.07782 12.8994 8.51855C13.2617 8.67827 13.6498 8.76305 14.0371 8.75781L13.4004 10.0723C13.2627 10.4778 12.8814 10.751 12.4531 10.751H5.00098L4.12891 4.75H8.89353Z"
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
          d="M8.17711 4.75H4.11801"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 13.25H4.75C3.9216 13.25 3.25 12.5784 3.25 11.75C3.25 10.9216 3.9216 10.25 4.75 10.25H13.0496C13.4701 10.25 13.8457 9.9869 13.9894 9.5917L14.0225 9.50049"
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
          d="M13.781 6.44701C13.919 6.51801 14.08 6.51801 14.218 6.44701C14.947 6.07301 17.249 4.717 17.249 2.513C17.253 1.545 16.458 0.756 15.472 0.75C14.879 0.757 14.328 1.051 13.999 1.536C13.67 1.052 13.118 0.758 12.526 0.75C11.541 0.756 10.746 1.544 10.749 2.513C10.749 4.718 13.053 6.07301 13.781 6.44701Z"
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

export default CartHeart;
