import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label({
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
          d="M12.25 17H5.75C4.2334 17 3 15.7661 3 14.25V7.0405C3 6.2646 3.3301 5.521 3.9053 5.0009L7.8262 1.454C8.4951 0.848503 9.5044 0.848503 10.1743 1.454L14.0947 5.0009C14.6699 5.5209 15 6.2646 15 7.0405V14.25C15 15.7661 13.7666 17 12.25 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 8C9.69036 8 10.25 7.44036 10.25 6.75C10.25 6.05964 9.69036 5.5 9 5.5C8.30964 5.5 7.75 6.05964 7.75 6.75C7.75 7.44036 8.30964 8 9 8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Label;
