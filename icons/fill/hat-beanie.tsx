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
          d="M10.571 5.723C10.41 5.723 10.248 5.671 10.111 5.565C9.78401 5.311 9.72501 4.839 9.98001 4.513C10.103 4.354 10.25 4.094 10.25 3.75C10.25 3.061 9.68901 2.5 9.00001 2.5C8.31101 2.5 7.75001 3.061 7.75001 3.75C7.75001 4.093 7.89701 4.354 8.02001 4.513C8.27401 4.84 8.21601 5.311 7.88901 5.565C7.56201 5.819 7.09101 5.76 6.83701 5.434C6.45301 4.941 6.25101 4.359 6.25101 3.75C6.25101 2.234 7.48401 1 9.00101 1C10.518 1 11.751 2.234 11.751 3.75C11.751 4.359 11.548 4.941 11.165 5.434C11.017 5.624 10.794 5.723 10.571 5.723Z"
          fill={secondaryfill}
        />
        <path
          d="M15.5 11.525V10.5C15.5 6.916 12.584 4 9 4C5.416 4 2.5 6.916 2.5 10.5V11.525C1.654 11.648 1 12.37 1 13.25V15.25C1 16.215 1.785 17 2.75 17H15.25C16.215 17 17 16.215 17 15.25V13.25C17 12.371 16.346 11.648 15.5 11.525ZM8.25 13V15.5H6V13H8.25ZM9.75 13H12V15.5H9.75V13ZM2.5 15.25V13.25C2.5 13.112 2.612 13 2.75 13H4.5V15.5H2.75C2.612 15.5 2.5 15.388 2.5 15.25ZM15.5 15.25C15.5 15.388 15.388 15.5 15.25 15.5H13.5V13H15.25C15.388 13 15.5 13.112 15.5 13.25V15.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HatBeanie;
