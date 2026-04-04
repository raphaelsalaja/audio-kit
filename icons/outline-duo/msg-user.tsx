import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgUser({
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
          d="M9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.319 2.108 11.552 2.723 12.617C3.153 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.872 15.559 6.647 15.933 7.662 16.125C8.095 16.207 8.543 16.25 9 16.25C9.11293 16.25 9.36436 16.2474 9.66797 16.2423C9.69277 16.1109 9.72743 15.9804 9.77217 15.8521C10.1748 14.6964 10.9954 13.7573 12.0078 13.1706C11.6871 12.6931 11.5 12.1184 11.5 11.5C11.5 9.84317 12.8432 8.5 14.5 8.5C14.9903 8.5 15.4531 8.61762 15.8618 8.82618C16.2226 8.7821 16.1159 8.55066 16.0651 8.31633C15.3241 4.89723 12.4421 1.75 9 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.1913 8.1535C15.772 4.5491 12.7167 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.319 2.108 11.552 2.723 12.617C3.153 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.872 15.559 6.647 15.933 7.662 16.125C8.0722 16.2027 8.4958 16.2454 8.9278 16.2496"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 13C15.3284 13 16 12.3284 16 11.5C16 10.6716 15.3284 10 14.5 10C13.6716 10 13 10.6716 13 11.5C13 12.3284 13.6716 13 14.5 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.6011 18H12.399C11.9923 18 11.6085 17.8013 11.3717 17.4683C11.1393 17.1407 11.0787 16.7207 11.2096 16.3453C11.6979 14.943 13.0201 14.0001 14.5001 14.0001C15.9801 14.0001 17.3023 14.943 17.7911 16.3458C17.9215 16.7208 17.8609 17.1407 17.6285 17.4684C17.3917 17.8014 17.0078 18 16.6011 18Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MsgUser;
