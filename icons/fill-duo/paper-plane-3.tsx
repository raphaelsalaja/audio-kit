import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane3({
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
          d="M9 13.7882L14.5913 15.4453C15.6758 15.7737 16.5939 14.6267 16.0762 13.6457L10.1234 2.18187C9.88379 1.72135 9.44154 1.49831 9 1.50091L9 13.7882Z"
          fill={fill}
        />
        <path
          d="M9 13.7882L9 1.50092C8.55836 1.50352 8.11744 1.73186 7.88075 2.1741L1.92255 13.6481C1.40664 14.6406 2.33668 15.7618 3.40611 15.4461L9 13.7882Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default PaperPlane3;
