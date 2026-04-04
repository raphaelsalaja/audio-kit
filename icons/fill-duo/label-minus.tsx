import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LabelMinus({
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
          d="M11.75 15C10.5098 15 9.5 13.9907 9.5 12.75C9.5 11.5093 10.5098 10.5 11.75 10.5H15V7.0405C15 6.2646 14.6699 5.521 14.0947 5.0009L10.1743 1.454C9.50439 0.848503 8.4951 0.848503 7.8262 1.454L3.9053 5.0009C3.3301 5.5209 3 6.2646 3 7.0405V14.25C3 15.7661 4.2334 17 5.75 17H12.25C13.5048 17 14.554 16.1504 14.8829 15H11.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.75 13.5H11.75C11.3359 13.5 11 13.1641 11 12.75C11 12.3359 11.3359 12 11.75 12H16.75C17.1641 12 17.5 12.3359 17.5 12.75C17.5 13.1641 17.1641 13.5 16.75 13.5Z"
          fill={fill}
        />
        <path
          d="M9 8C9.69036 8 10.25 7.44036 10.25 6.75C10.25 6.05964 9.69036 5.5 9 5.5C8.30964 5.5 7.75 6.05964 7.75 6.75C7.75 7.44036 8.30964 8 9 8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LabelMinus;
