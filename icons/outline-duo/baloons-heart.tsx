import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BaloonsHeart({
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
          d="M11.9976 12.6902C12.1564 12.7699 12.3426 12.7699 12.5023 12.6902C13.3432 12.2673 15.9999 10.735 15.9999 8.2425C16.0043 7.1479 15.0867 6.257 13.9502 6.25C13.2664 6.2587 12.6302 6.5906 12.2499 7.1383C11.8696 6.5906 11.2343 6.2586 10.5496 6.25C9.41229 6.2569 8.49549 7.1479 8.49989 8.2425C8.49989 10.735 11.1568 12.2673 11.9976 12.6902Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.837 16.745C11.362 16.27 11.362 15.5 11.837 15.025L12.25 14.607C12.725 14.132 12.725 13.362 12.25 12.887"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.9976 12.6902C12.1564 12.7699 12.3426 12.7699 12.5023 12.6902C13.3432 12.2673 15.9999 10.735 15.9999 8.2425C16.0043 7.1479 15.0867 6.257 13.9502 6.25C13.2664 6.2587 12.6302 6.5906 12.2499 7.1383C11.8696 6.5906 11.2343 6.2586 10.5496 6.25C9.41229 6.2569 8.49549 7.1479 8.49989 8.2425C8.49989 10.735 11.1568 12.2673 11.9976 12.6902Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.22299 15.741C5.73599 15.254 5.73599 14.463 6.22299 13.976L6.647 13.547C7.134 13.06 7.123 12.269 6.636 11.781L6.00399 11.248C4.41799 10.041 1.99999 8.17599 1.99999 4.96799C1.99299 3.19999 3.45999 1.75999 5.27999 1.74899C6.37499 1.76299 7.39199 2.29899 7.99999 3.18399C8.60799 2.29899 9.62601 1.76299 10.72 1.74899C11.8966 1.75589 12.9167 2.36669 13.4954 3.27269"
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

export default BaloonsHeart;
