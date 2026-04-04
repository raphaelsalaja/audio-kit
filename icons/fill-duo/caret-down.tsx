import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretDown({
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
          d="M14.024 3.99997H3.97603C3.33803 3.99997 2.75001 4.34698 2.44301 4.90598C2.13601 5.46498 2.156 6.14798 2.498 6.68698L7.52202 14.61C7.84502 15.119 8.39702 15.422 9.00002 15.422C9.60302 15.422 10.155 15.118 10.478 14.61L15.503 6.68597C15.844 6.14697 15.865 5.46397 15.558 4.90497C15.251 4.34597 14.663 3.99896 14.025 3.99896L14.024 3.99997Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CaretDown;
