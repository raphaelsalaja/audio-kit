import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardReader({
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
          d="M9 15C9.41421 15 9.75 15.3358 9.75 15.75V17.25C9.75 17.6642 9.41421 18 9 18C8.58579 18 8.25 17.6642 8.25 17.25V15.75C8.25 15.3358 8.58579 15 9 15Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 3.75C1 2.23079 2.23079 1 3.75 1H14.25C15.7692 1 17 2.23079 17 3.75V10.25C17 11.7692 15.7692 13 14.25 13H12V10H6V13H3.75C2.23079 13 1 11.7692 1 10.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path d="M1 6.5V5H17V6.5H1Z" fill={fill} />
        <path
          d="M5 10.432C5 9.36479 5.8648 8.5 6.93201 8.5H11.068C12.1352 8.5 13 9.3648 13 10.432V14.568C13 15.6352 12.1352 16.5 11.068 16.5H6.93201C5.8648 16.5 5 15.6352 5 14.568V10.432ZM7.75 11H10.25C10.388 11 10.5 11.112 10.5 11.25V13.75C10.5 13.888 10.388 14 10.25 14H7.75C7.612 14 7.5 13.888 7.5 13.75V11.25C7.5 11.112 7.612 11 7.75 11Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CreditCardReader;
