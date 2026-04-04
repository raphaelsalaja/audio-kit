import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BabyCarSeat({
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
          d="M3.13855 2.03481C4.4483 1.87606 5.66779 2.66876 6.07653 3.89032C6.16165 4.14472 6.20329 4.42309 6.23227 4.61676C6.52611 6.58092 6.87062 8.53883 7.19017 10.499H10.732C10.9341 10.499 11.1595 10.4126 11.4033 10.2163C11.4312 10.1939 11.4761 10.1529 11.5508 10.0934C12.1846 9.58864 13.0447 9.36057 13.9439 9.58538C14.8616 9.81458 15.6094 10.5333 15.8803 11.4339C15.9062 11.52 15.9271 11.6059 15.9437 11.69C16.0935 12.4488 15.9323 13.2743 15.4388 13.9199C14.9319 14.583 14.1185 14.999 13.09 14.999H5.69199C4.34332 14.999 3.19226 14.0203 2.97756 12.6874L1.42556 3.06745C1.39386 2.87092 1.44158 2.66985 1.55823 2.50854C1.67488 2.34722 1.85087 2.2389 2.04744 2.20743C2.4105 2.14931 2.77344 2.07907 3.13855 2.03481Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.5303 5.03033C13.8232 4.73744 13.8232 4.26256 13.5303 3.96967C13.2374 3.67678 12.7626 3.67678 12.4697 3.96967L7.38853 9.05081C7.26461 9.01767 7.13437 9 7 9C6.1716 9 5.5 9.6716 5.5 10.5C5.5 11.3284 6.1716 12 7 12C7.8284 12 8.5 11.3284 8.5 10.5C8.5 10.3656 8.48233 10.2354 8.44919 10.1115L13.5303 5.03033Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BabyCarSeat;
