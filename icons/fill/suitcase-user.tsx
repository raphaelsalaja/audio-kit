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
          d="M11.75 5.5C11.336 5.5 11 5.164 11 4.75V2.25C11 2.112 10.888 2 10.75 2H7.25C7.112 2 7 2.112 7 2.25V4.75C7 5.164 6.664 5.5 6.25 5.5C5.836 5.5 5.5 5.164 5.5 4.75V2.25C5.5 1.285 6.285 0.5 7.25 0.5H10.75C11.715 0.5 12.5 1.285 12.5 2.25V4.75C12.5 5.164 12.164 5.5 11.75 5.5Z"
          fill={fill}
        />
        <path
          d="M14.5 12C15.3284 12 16 11.3284 16 10.5C16 9.67157 15.3284 9 14.5 9C13.6716 9 13 9.67157 13 10.5C13 11.3284 13.6716 12 14.5 12Z"
          fill={secondaryfill}
        />
        <path
          d="M16.6011 17H12.399C11.9923 17 11.6085 16.8013 11.3717 16.4683C11.1393 16.1407 11.0787 15.7207 11.2096 15.3453C11.6979 13.943 13.0201 13.0001 14.5001 13.0001C15.9801 13.0001 17.3023 13.943 17.7911 15.3458C17.9215 15.7208 17.8609 16.1407 17.6285 16.4684C17.3917 16.8014 17.0078 17 16.6011 17Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 16H9.6533C9.50822 14.4351 10.7285 12.912 12.0078 12.1706C11.6871 11.6931 11.5 11.1184 11.5 10.5C11.5 8.84312 12.8432 7.5 14.5 7.5C15.5435 7.5 16.4625 8.03275 17 8.84111V6.75C17 5.233 15.767 4 14.25 4H3.75C2.233 4 1 5.233 1 6.75V13.25C1 14.767 2.233 16 3.75 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SuitcaseUser;
