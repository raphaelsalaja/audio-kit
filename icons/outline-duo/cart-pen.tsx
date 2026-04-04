import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CartPen({
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
          d="M12.0459 6.20419L15.2071 3.043C15.5976 2.6525 15.5976 2.0193 15.2071 1.6288L14.6213 1.043C14.2308 0.652496 13.5976 0.652496 13.2071 1.043L10.0459 4.20419L9.25011 7.0001L12.0459 6.20419Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.08594 6.38477C6.86262 7.17071 7.08311 8.01468 7.65918 8.59082L7.77051 8.69434C8.34077 9.1925 9.12921 9.37349 9.86621 9.16406L12.6621 8.36816C13.0281 8.26387 13.3652 8.06641 13.6367 7.79492L14.0771 7.35352L13.4316 10.0732C13.2939 10.4785 12.9135 10.7509 12.4854 10.751H5.00098L4.08984 5.07031L7.48584 4.95166L7.08594 6.38477Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 1.75L3.101 2.088C3.494 2.186 3.78901 2.51199 3.84801 2.91299L4.92731 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.771 4.75H4.118"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 13.25H4.75C3.9216 13.25 3.25 12.5784 3.25 11.75C3.25 10.9216 3.9216 10.25 4.75 10.25H13.0496C13.4701 10.25 13.8457 9.98692 13.9894 9.59172L14.6114 7.88092"
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
          d="M12.0459 6.20419L15.2071 3.043C15.5976 2.6525 15.5976 2.0193 15.2071 1.6288L14.6213 1.043C14.2308 0.652496 13.5976 0.652496 13.2071 1.043L10.0459 4.20419L9.25011 7.0001L12.0459 6.20419Z"
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

export default CartPen;
