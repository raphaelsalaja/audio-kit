import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseSparkle({
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
          d="M10.0591 1.36312C9.4333 0.886569 8.56694 0.887445 7.94127 1.36281L2.69155 5.3526C2.2559 5.68346 2 6.19867 2 6.746V14.25C2 15.7692 3.23079 17 4.75 17H13.25C14.7692 17 16 15.7692 16 14.25V6.746C16 6.20008 15.7448 5.68398 15.3088 5.35287L10.0591 1.36312Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.2373 9.5381L10.3428 8.9072L9.7115 7.0127C9.6094 6.707 9.3228 6.5 9.0001 6.5C8.6774 6.5 8.3907 6.707 8.2887 7.0127L7.6574 8.9072L5.7629 9.5381C5.4567 9.6406 5.2502 9.9268 5.2502 10.25C5.2502 10.5732 5.4567 10.8594 5.7629 10.9619L7.6574 11.5928L8.2887 13.4873C8.3908 13.793 8.6774 14 9.0001 14C9.3228 14 9.6095 13.793 9.7115 13.4873L10.3428 11.5928L12.2373 10.9619C12.5435 10.8594 12.75 10.5732 12.75 10.25C12.75 9.9268 12.5435 9.6406 12.2373 9.5381Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseSparkle;
