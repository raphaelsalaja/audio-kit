import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallRugby({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.251"
          x2="8.45"
          y1="8.084"
          y2="10.283"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.084"
          x2="10.283"
          y1="6.251"
          y2="8.45"
        />
        <path
          d="M6.434,10.466c.455-.659,1.055-1.421,1.833-2.199,.566-.566,1.294-1.208,2.199-1.833"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.262,10.567c1.192,.338,2.317,.977,3.256,1.915s1.577,2.063,1.915,3.256"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.567,2.262c.338,1.192,.977,2.317,1.915,3.256s2.063,1.577,3.256,1.915"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.82,4.82c-2.616,2.616-3.232,6.468-1.862,9.674,.104,.244,.304,.444,.548,.548,3.206,1.37,7.058,.754,9.674-1.862s3.232-6.468,1.862-9.674c-.104-.244-.304-.444-.548-.548-3.206-1.37-7.058-.754-9.674,1.862Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default BallRugby;
