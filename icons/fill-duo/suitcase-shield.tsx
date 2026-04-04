import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseShield({
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
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
        <path
          d="M17.5605 10.3174L14.8105 9.06735C14.6132 8.97755 14.3867 8.97755 14.1894 9.06735L11.4395 10.3174C11.1719 10.4384 11 10.7061 11 11V13.9404C11 15.9901 13.9604 16.8779 14.2979 16.9725C14.3638 16.9911 14.4322 16.9998 14.5 16.9998C14.5678 16.9998 14.6362 16.991 14.7021 16.9725C15.0395 16.8779 18 15.9901 18 13.9404V11C18 10.7061 17.8281 10.4384 17.5605 10.3174ZM16.5 13.9404C16.5 14.5487 15.3726 15.1757 14.5 15.4657V10.5742L16.5 11.4834V13.9404Z"
          fill={fill}
        />
        <path
          d="M1 6.75C1 5.23203 2.23054 4 3.75 4H14.25C15.7695 4 17 5.23203 17 6.75V8.41489L15.4319 7.70211C14.8402 7.43304 14.1604 7.43273 13.5687 7.70181L10.8099 8.95585C10.0214 9.32672 9.5 10.1252 9.5 10.9999V13.9403C9.5 14.7653 9.76924 15.4475 10.1482 16H3.75C2.23054 16 1 14.768 1 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitcaseShield;
