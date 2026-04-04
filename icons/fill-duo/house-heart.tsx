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
          d="M7.94127 1.36281C8.56694 0.887449 9.4333 0.886573 10.0591 1.36312L15.3088 5.35288C15.7448 5.68398 16 6.20008 16 6.746V9.25582C15.8103 9.24621 15.6178 9.25176 15.4274 9.2732C14.9197 9.33037 14.4348 9.49134 14 9.74052C13.525 9.46833 12.9903 9.30138 12.4316 9.26004C12.2629 9.24756 12.0941 9.24793 11.9297 9.25992C10.1284 9.39131 8.70068 10.8076 8.51938 12.583C8.49404 12.8312 8.49768 13.0636 8.50683 13.2481C8.58509 14.826 9.31743 16.0841 10.1163 17H4.75C3.23079 17 2 15.7692 2 14.25V6.746C2 6.19867 2.2559 5.68346 2.69155 5.3526L7.94127 1.36281Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.7311 17.9332C13.9009 18.0224 14.0992 18.0224 14.269 17.9332C15.1662 17.4617 18 15.7522 18 12.9725C18.0044 11.7517 17.0263 10.7575 15.8134 10.7501C15.0837 10.7595 14.4054 11.1301 14 11.7408C13.5946 11.1301 12.9163 10.7595 12.1866 10.7501C10.9737 10.7575 9.99561 11.7517 10 12.9725C10 15.7522 12.8339 17.4616 13.7311 17.9332Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseHeart;
