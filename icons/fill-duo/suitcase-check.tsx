import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseCheck({
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
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
        <path
          d="M14 9C11.7939 9 10 10.7944 10 13C10 15.2056 11.7939 17 14 17C16.2061 17 18 15.2056 18 13C18 10.7944 16.2061 9 14 9ZM16.3076 12.252L14.0576 14.752C13.9153 14.9099 13.7124 15.0001 13.5 15.0001C13.3018 15.0001 13.1104 14.9215 12.9697 14.7804L11.7197 13.5304C11.4267 13.2374 11.4267 12.7628 11.7197 12.4699C12.0127 12.177 12.4873 12.1769 12.7802 12.4699L13.4716 13.1608L15.1923 11.2482C15.4706 10.9416 15.9433 10.9162 16.2519 11.1925C16.5595 11.4698 16.5849 11.9439 16.3076 12.252Z"
          fill={fill}
        />
        <path
          d="M1 6.75C1 5.23203 2.23054 4 3.75 4H14.25C15.7695 4 17 5.23203 17 6.75V8.39123C16.1369 7.82773 15.1063 7.5 14 7.5C10.9654 7.5 8.5 9.96609 8.5 13C8.5 14.1061 8.82772 15.1368 9.39126 16H3.75C2.23054 16 1 14.768 1 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitcaseCheck;
