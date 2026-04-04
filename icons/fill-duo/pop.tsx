import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pop({
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
          d="M2.84156 3.34187C3.20108 2.40128 4.43805 2.20542 5.07573 2.97575L8.19914 6.7583C8.8432 7.53801 8.40133 8.71829 7.40231 8.88079L2.52399 9.68504C1.51661 9.85019 0.726969 8.85126 1.08616 7.91504L2.84156 3.34187Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.5 1C11.5668 1 10 2.56679 10 4.5C10 6.43321 11.5668 8 13.5 8C15.4332 8 17 6.43321 17 4.5C17 2.56679 15.4332 1 13.5 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.1248 9.3966C10.9584 9.16641 10.6763 9.04998 10.3959 9.09584C10.1156 9.1417 9.88526 9.34197 9.80088 9.61319C9.38195 10.9597 8.53879 12.1346 7.39631 12.9614C7.1662 13.128 7.04991 13.4102 7.09593 13.6905C7.14194 13.9708 7.34236 14.2011 7.61364 14.2853C8.95954 14.7031 10.1344 15.547 10.9614 16.6897C11.128 16.9198 11.4103 17.0361 11.6906 16.9901C11.9709 16.944 12.2012 16.7436 12.2853 16.4722C12.7032 15.1254 13.547 13.9507 14.6894 13.1248C14.9196 12.9584 15.0361 12.6762 14.9902 12.3958C14.9443 12.1155 14.744 11.8852 14.4727 11.8008C13.1252 11.3819 11.9505 10.5387 11.1248 9.3966Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
}

export default Pop;
