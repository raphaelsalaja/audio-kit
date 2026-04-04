import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCompose2({
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
          d="M1 9C1 4.58189 4.58178 1 9 1C9.28531 1 9.5614 1.03029 9.78239 1.05184C10.1946 1.09205 10.4963 1.45884 10.456 1.8711C10.4158 2.28336 10.049 2.58497 9.63679 2.54476C9.38818 2.52051 9.19569 2.5 9 2.5C5.41022 2.5 2.5 5.41031 2.5 9C2.5 12.5897 5.41022 15.5 9 15.5C12.5898 15.5 15.5 12.5897 15.5 9C15.5 8.8042 15.4794 8.61201 15.4553 8.36273C15.4154 7.95044 15.7173 7.58388 16.1296 7.54399C16.5419 7.50409 16.9084 7.80598 16.9483 8.21827C16.9696 8.43819 17 8.7148 17 9C17 13.4181 13.4182 17 9 17C4.58178 17 1 13.4181 1 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.3121 1.68785C15.5891 0.964849 14.3281 0.964849 13.6051 1.68785L7.96124 7.33173C7.31524 7.97773 7.08424 9.38973 7.00524 10.1727C6.98324 10.3967 7.06224 10.6197 7.22124 10.7787C7.36324 10.9207 7.55324 10.9987 7.75124 10.9987C7.77624 10.9987 7.80224 10.9977 7.82624 10.9947C8.61024 10.9147 10.0212 10.6857 10.6682 10.0387L16.3131 4.39385C17.0571 3.64785 17.0561 2.43485 16.3121 1.68785Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CircleCompose2;
