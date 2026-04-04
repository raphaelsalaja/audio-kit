import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GiftCard({
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
          d="M1 6.75C1 5.23128 2.23069 4 3.75 4H14.25C15.7693 4 17 5.23128 17 6.75V12.25C17 13.7687 15.7693 15 14.25 15H3.75C2.23069 15 1 13.7687 1 12.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.25 2.176C7.788 1.252 8.656 0.5 10 0.5C11.378 0.5 12.5 1.622 12.5 3C12.5 3.3553 12.4254 3.69358 12.2911 4H10C10.551 4 11 3.551 11 3C11 2.449 10.551 2 10 2C8.807 2 8.195 3.173 8 4H6.5C6.306 3.173 5.693 2 4.5 2C3.949 2 3.5 2.449 3.5 3C3.5 3.551 3.949 4 4.5 4H3.75C3.25907 4 2.79827 4.12856 2.3994 4.35384C2.14679 3.96337 2 3.49843 2 3C2 1.622 3.122 0.5 4.5 0.5C5.844 0.5 6.712 1.252 7.25 2.176Z"
          fill={fill}
        />
        <path d="M8 4H6.5V7.5H1V9H6.5V15H8V9H17V7.5H8V4Z" fill={fill} />
      </g>
    </svg>
  );
}

export default GiftCard;
