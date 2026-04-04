import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileUser({
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
          d="M9.79323 15.8514C10.1958 14.6958 10.9955 13.7573 12.0078 13.1706C11.6871 12.6931 11.5 12.1184 11.5 11.5C11.5 9.84317 12.8432 8.5 14.5 8.5C15.0464 8.5 15.5587 8.6461 16 8.90136V6.66498C16 6.19798 15.818 5.75798 15.487 5.42798L11.573 1.51398C11.242 1.18298 10.803 1.00098 10.336 1.00098H4.75C3.233 1.00098 2 2.23398 2 3.75098V14.25C2 15.767 3.233 17 4.75 17H9.65331C9.61785 16.6174 9.66291 16.2255 9.79323 15.8514Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.5 13C15.3284 13 16 12.3284 16 11.5C16 10.6716 15.3284 10 14.5 10C13.6716 10 13 10.6716 13 11.5C13 12.3284 13.6716 13 14.5 13Z"
          fill={fill}
        />
        <path
          d="M16.6011 18H12.399C11.9923 18 11.6085 17.8013 11.3717 17.4683C11.1393 17.1407 11.0787 16.7207 11.2096 16.3453C11.6979 14.943 13.0201 14.0001 14.5001 14.0001C15.9801 14.0001 17.3023 14.943 17.7911 16.3458C17.9215 16.7208 17.8609 17.1407 17.6285 17.4684C17.3917 17.8014 17.0078 18 16.6011 18Z"
          fill={fill}
        />
        <path
          d="M5.75 9C5.336 9 5 9.336 5 9.75C5 10.164 5.336 10.5 5.75 10.5H10.25C10.664 10.5 11 10.164 11 9.75C11 9.336 10.664 9 10.25 9H5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.8691 6.00095H12C11.45 6.00095 11 5.55095 11 5.00095V1.13098C11.212 1.21803 11.4068 1.34674 11.572 1.51197L15.487 5.42697C15.6527 5.59263 15.7818 5.78817 15.8691 6.00095Z"
          fill={fill}
        />
        <path
          d="M7.75 6H5.75C5.336 6 5 6.336 5 6.75C5 7.164 5.336 7.5 5.75 7.5H7.75C8.164 7.5 8.5 7.164 8.5 6.75C8.5 6.336 8.164 6 7.75 6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FileUser;
