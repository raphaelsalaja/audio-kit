import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hexagons({
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
          d="M0.999847 10.8764V7.1236C0.999847 6.31977 1.42869 5.57693 2.1249 5.17505L5.3749 3.29865C6.07102 2.89681 6.92872 2.89684 7.62485 3.29868L10.8748 5.17505C10.9618 5.22528 11.0447 5.28084 11.123 5.34119C11.6715 5.76359 11.9998 6.42024 11.9998 7.12359V10.6863C11.9998 10.8137 12.0024 10.9422 11.9917 11.0678C11.9296 11.7968 11.5154 12.4552 10.8748 12.8249L7.62485 14.7013C6.92872 15.1032 6.07102 15.1032 5.3749 14.7013L2.1249 12.8249C1.42869 12.4231 0.999847 11.6802 0.999847 10.8764Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6 10.8764V7.1236C6 6.31977 6.42884 5.57693 7.12505 5.17505L10.3751 3.29865C11.0712 2.89681 11.9289 2.89684 12.625 3.29868L15.8749 5.17505C15.962 5.22528 16.0448 5.28084 16.1232 5.34119C16.6717 5.76359 17 6.42024 17 7.12359V10.6863C17 10.8137 17.0026 10.9422 16.9919 11.0678C16.9298 11.7968 16.5155 12.4552 15.8749 12.8249L12.625 14.7013C11.9289 15.1032 11.0712 15.1032 10.3751 14.7013L7.12505 12.8249C6.42884 12.4231 6 11.6802 6 10.8764Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Hexagons;
