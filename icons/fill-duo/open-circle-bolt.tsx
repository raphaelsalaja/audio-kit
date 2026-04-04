import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenCircleBolt({
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
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.844 7.55499C13.65 7.21299 13.283 6.99999 12.89 6.99999H9.86902L10.596 2.09199C10.665 1.63899 10.412 1.21499 9.98101 1.06099C9.54901 0.905988 9.08402 1.07399 8.85002 1.46799L4.16701 9.34299C3.96601 9.68099 3.96201 10.104 4.15601 10.446C4.35001 10.788 4.71701 11.001 5.11001 11.001H8.13101L7.40401 15.909C7.33501 16.362 7.58801 16.786 8.01901 16.94C8.12601 16.979 8.23701 16.997 8.34401 16.997C8.66801 16.997 8.97401 16.829 9.15001 16.533L13.833 8.65799C14.034 8.31999 14.038 7.89699 13.844 7.55499Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OpenCircleBolt;
