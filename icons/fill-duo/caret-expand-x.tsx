import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretExpandX({
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
          d="M15.42 7.96504L11.95 5.61604C11.567 5.35604 11.074 5.33001 10.664 5.54701C10.254 5.76401 10 6.18802 10 6.65102V11.347C10 11.81 10.254 12.234 10.664 12.451C10.849 12.549 11.05 12.597 11.25 12.597C11.495 12.597 11.739 12.525 11.951 12.382L15.42 10.033C15.764 9.80004 15.968 9.413 15.968 8.998C15.968 8.583 15.764 8.19603 15.42 7.96303V7.96504Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.336 5.54799C6.926 5.33099 6.435 5.35702 6.049 5.61702L2.58 7.96504C2.236 8.19804 2.032 8.58502 2.032 9.00002C2.032 9.41502 2.236 9.80199 2.58 10.035L6.05 12.383C6.261 12.526 6.505 12.598 6.75 12.598C6.95 12.598 7.151 12.549 7.336 12.452C7.746 12.235 8 11.811 8 11.348V6.65199C8 6.18899 7.746 5.76499 7.336 5.54799Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CaretExpandX;
