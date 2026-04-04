import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HatBeanie({
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
          d="M9 4C5.40979 4 2.5 6.90979 2.5 10.5V12.0218C2.58165 12.0102 2.66512 12.0041 2.75 12.0041H15.25C15.3349 12.0041 15.4184 12.0102 15.5 12.0218V10.5C15.5 6.90979 12.5902 4 9 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 1C7.48054 1 6.25 2.23203 6.25 3.75C6.25 4.03153 6.29369 4.30072 6.37258 4.55279C7.17597 4.19739 8.0649 4 9 4C9.9351 4 10.824 4.1974 11.6274 4.55279C11.7063 4.30072 11.75 4.03153 11.75 3.75C11.75 2.23203 10.5195 1 9 1Z"
          fill={fill}
        />
        <path
          d="M2.75 11.5C1.78334 11.5 1 12.2839 1 13.25V15.25C1 16.2161 1.78334 17 2.75 17H15.25C16.2167 17 17 16.2161 17 15.25V13.25C17 12.2839 16.2167 11.5 15.25 11.5H2.75ZM13.5 13H12V15.5H13.5V13ZM9.75 15.5V13H8.25V15.5H9.75ZM6 15.5V13H4.5V15.5H6Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HatBeanie;
