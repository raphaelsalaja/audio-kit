import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StillRings({
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
          d="M6.5 7.076V2.75C6.5 2.336 6.164 2 5.75 2C5.336 2 5 2.336 5 2.75V7.076C2.876 7.436 1.25 9.276 1.25 11.5C1.25 13.981 3.269 16 5.75 16C8.231 16 10.25 13.981 10.25 11.5C10.25 9.275 8.624 7.436 6.5 7.076ZM5.75 14.5C4.096 14.5 2.75 13.154 2.75 11.5C2.75 9.846 4.096 8.5 5.75 8.5C7.404 8.5 8.75 9.846 8.75 11.5C8.75 13.154 7.404 14.5 5.75 14.5Z"
          fill={fill}
        />
        <path
          d="M13 2.75C13 2.33579 12.6642 2 12.25 2C11.8358 2 11.5 2.33579 11.5 2.75V7.07168C11.4163 7.08692 11.3347 7.10389 11.2554 7.1219C10.8515 7.21357 10.5983 7.61535 10.69 8.01929C10.7817 8.42323 11.1834 8.67638 11.5874 8.5847C11.822 8.53146 12.038 8.5 12.25 8.5C13.9068 8.5 15.25 9.84321 15.25 11.5C15.25 13.1568 13.9068 14.5 12.25 14.5C12.038 14.5 11.822 14.4685 11.5874 14.4153C11.1834 14.3236 10.7817 14.5768 10.69 14.9807C10.5983 15.3846 10.8515 15.7864 11.2554 15.8781C11.5566 15.9465 11.89 16 12.25 16C14.7352 16 16.75 13.9852 16.75 11.5C16.75 9.27032 15.1282 7.4193 13 7.06222V2.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default StillRings;
