import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseUser({
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
          d="M14.5 12C15.3284 12 16 11.3284 16 10.5C16 9.67157 15.3284 9 14.5 9C13.6716 9 13 9.67157 13 10.5C13 11.3284 13.6716 12 14.5 12Z"
          fill={fill}
        />
        <path
          d="M16.6011 17H12.399C11.9923 17 11.6085 16.8013 11.3717 16.4683C11.1393 16.1407 11.0787 15.7207 11.2096 15.3453C11.6979 13.943 13.0201 13.0001 14.5001 13.0001C15.9801 13.0001 17.3023 13.943 17.7911 15.3458C17.9215 15.7208 17.8609 16.1407 17.6285 16.4684C17.3917 16.8014 17.0078 17 16.6011 17Z"
          fill={fill}
        />
        <path
          d="M3.75 4C2.23054 4 1 5.23203 1 6.75V13.25C1 14.768 2.23054 16 3.75 16H9.65336C9.6179 15.6174 9.66275 15.2261 9.79306 14.8521C10.1956 13.6964 10.9955 12.7574 12.0078 12.1706C11.6871 11.6931 11.5 11.1184 11.5 10.5C11.5 8.84312 12.8432 7.5 14.5 7.5C15.5435 7.5 16.4625 8.03275 17 8.84111V6.75C17 5.23203 15.7695 4 14.25 4H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitcaseUser;
