import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseShield({
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
          d="M17.5605 11.3174L14.8105 10.0674C14.6132 9.97755 14.3867 9.97755 14.1894 10.0674L11.4395 11.3174C11.1719 11.4384 11 11.7061 11 12V14.9404C11 16.9901 13.9604 17.8779 14.2979 17.9725C14.3638 17.9911 14.4322 17.9998 14.5 17.9998C14.5678 17.9998 14.6362 17.991 14.7021 17.9725C15.0395 17.8779 18 16.9901 18 14.9404V12C18 11.7061 17.8281 11.4384 17.5605 11.3174ZM16.5 14.9404C16.5 15.5487 15.3726 16.1757 14.5 16.4657V11.5742L16.5 12.4834V14.9404Z"
          fill={fill}
        />
        <path
          d="M7.94127 1.36281C8.56694 0.887445 9.4333 0.886569 10.0591 1.36312L15.3088 5.35287C15.7448 5.68398 16 6.20008 16 6.746V8.96035L15.4312 8.7018C14.8395 8.43273 14.1597 8.43304 13.568 8.70211L10.8211 9.95077L10.8196 9.95143C10.0136 10.3169 9.5 11.1202 9.5 12V14.9404C9.5 15.7653 9.76924 16.4475 10.1482 17H4.75C3.23079 17 2 15.7692 2 14.25V6.746C2 6.19867 2.2559 5.68346 2.69155 5.3526L7.94127 1.36281Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default HouseShield;
