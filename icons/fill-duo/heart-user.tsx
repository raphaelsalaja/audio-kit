import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartUser({
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
          d="M13.5 12C14.3284 12 15 11.3284 15 10.5C15 9.67157 14.3284 9 13.5 9C12.6716 9 12 9.67157 12 10.5C12 11.3284 12.6716 12 13.5 12Z"
          fill={fill}
        />
        <path
          d="M8.793 14.8516C9.1956 13.6941 10.0041 12.7674 11.017 12.1812C10.6911 11.7012 10.5 11.1226 10.5 10.5C10.5 8.8457 11.8457 7.5 13.5 7.5C14.7352 7.5 15.797 8.251 16.2565 9.3196C16.5648 8.4893 16.7491 7.5867 16.7491 6.6118C16.7589 4.0845 14.7081 2.0156 12.1632 2C10.9679 2.0151 9.84 2.4902 9.0001 3.3057C8.1593 2.4903 7.02839 2.0152 5.82239 2C3.29209 2.0156 1.2413 4.0845 1.2511 6.6089C1.2511 11.8604 6.55681 15.0381 8.18271 15.8872C8.33681 15.9675 8.5006 16.0156 8.667 16.0476C8.6228 15.6479 8.6574 15.2397 8.793 14.8516Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.6011 17H11.399C10.9923 17 10.6085 16.8013 10.3717 16.4683C10.1393 16.1407 10.0787 15.7207 10.2096 15.3453C10.6979 13.943 12.0201 13.0001 13.5001 13.0001C14.9801 13.0001 16.3023 13.943 16.7911 15.3458C16.9215 15.7208 16.8609 16.1407 16.6285 16.4684C16.3917 16.8014 16.0078 17 15.6011 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HeartUser;
