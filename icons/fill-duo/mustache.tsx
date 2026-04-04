import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mustache({
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
          d="M17.621 7.62699C17.388 7.49399 17.1 7.49599 16.869 7.63099C16.293 7.96999 15.605 7.45299 14.54 6.56499C13.607 5.78799 12.638 4.95799 11.491 5.00099C10.542 5.04899 9.662 5.43399 8.998 6.06899C8.332 5.43399 7.445 5.04799 6.469 4.99999C5.335 4.99999 4.381 5.79599 3.458 6.56499C2.393 7.45399 1.706 7.96999 1.129 7.63099C0.898 7.49599 0.61 7.49399 0.377 7.62699C0.144 7.76099 0 8.00899 0 8.27799C0 11.1008 2.60257 13 5.256 13C6.645 13 7.992 12.466 9 11.542C10.008 12.466 11.354 13 12.743 13C15.3966 13 18 11.1013 18 8.27799C18 8.00899 17.856 7.76099 17.623 7.62699H17.621Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Mustache;
